
from django.urls import path, re_path
from .views import*


urlpatterns = [
    path('stripe/create-checkout/', CreateCheckout.as_view()),
]
