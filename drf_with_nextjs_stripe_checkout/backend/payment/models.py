from django.conf import settings
from django.db import models

from django.contrib.auth.models import User
from django.conf import settings
from django.utils import timezone


class UserCredits(models.Model):
    user = models.CharField(max_length=100, null=True, blank=True)
    credits = models.IntegerField(default=0, null=False)
    product_name = models.CharField(max_length=40, null=True,blank=True)