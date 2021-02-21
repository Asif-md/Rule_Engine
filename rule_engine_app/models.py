from django.db import models


class RuleEngine(models.Model):
    fullName = models.CharField(max_length=70, blank=False, default='')
    address = models.CharField(max_length=200, blank=False, default='')
    DOB = models.CharField(max_length=200, blank=False, default='')
    base_price = models.IntegerField(null=True, blank=True)
