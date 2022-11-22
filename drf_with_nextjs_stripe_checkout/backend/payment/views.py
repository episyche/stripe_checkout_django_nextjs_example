from urllib import response
from django.http import JsonResponse
from django.shortcuts import redirect, HttpResponse
from django.conf import settings
from pytz import timezone
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
import stripe
from .models import*
from django.utils import timezone


stripe.api_key = settings.STRIPE_SECRET_KEY
endpoint_secret = settings.STRIPE_WEBHOOK_SECRET



def email_customer_about_failed_payment(session):
    # TODO: fill me in
    print("Emailing customer")


def fulfill_order(session):
    new_added_credits = int(session.amount_total/10)
    user_id = session.client_reference_id

    respose_url = session.success_url

    # #-------------App credits add method---------------#
    try:
        split_url = respose_url.split("/")
        split_part = split_url[-1]
        
    except:
        response_msg = ""

    if split_part == "success":
        # Added only if it is topup
        user_history_update = UserCredits(user=user_id,credits=new_added_credits)
        user_history_update.save()



@permission_classes((AllowAny, ))
class CreateCheckout(APIView):

    def post(self, request):
        """
        This API create a checkout .

        :return: redirect to payment page .
        """
        request_data = request.data
        price = request_data['price']
        product_name = request_data['product_name']
        user_id = request_data['user_name']

        try:
            sucess_url = request.data['redirect-sucesss-url']
        except:
            sucess_url = settings.CROS_URL+settings.CHECKOUT_SUCCESS_URL

        try:
            faild_url = request.data['redirect-failed-url']
        except:
            faild_url = settings.CROS_URL+settings.CHECKOUT_FAILED_URL

        try:
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                client_reference_id=user_id,
                line_items=[{
                    'price_data': {
                        'currency': 'usd',
                        'product_data': {
                            'name': product_name,
                        },
                        'unit_amount': price,
                    },
                    'quantity': 1,
                }],
                mode='payment',
                success_url=sucess_url,
                cancel_url=faild_url,
            )
            return redirect(checkout_session.url, code=303)
        except:
            # msg = api_msg_obj.server_error
            status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
            # resp_json = CustomResponse.default_response(msg, status_code)
            
            resp_json = {"data":"message"}
            return Response(resp_json, status=status_code)

@permission_classes((AllowAny, ))
class MyWebhookView(APIView):
    def post(self, request):
        payload = request.body.decode('utf-8')
        sig_header = request.META['HTTP_STRIPE_SIGNATURE']
        event = None
        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
        except ValueError as e:
            # Invalid payload
            return HttpResponse(status=400)
        except stripe.error.SignatureVerificationError as e:
            # Invalid signature
            return HttpResponse(status=400)

        if event['type'] == 'checkout.session.completed':
            session = event['data']['object']
            # create_order(session)
            if session.payment_status == "paid":
                fulfill_order(session)

        elif event['type'] == 'checkout.session.async_payment_succeeded':
            session = event['data']['object']
            # Fulfill the purchase
            fulfill_order(session)

        elif event['type'] == 'checkout.session.async_payment_failed':
            session = event['data']['object']

            # Send an email to the customer asking them to retry their order
            email_customer_about_failed_payment(session)

        # Passed signature verification
        return HttpResponse(status=200)
