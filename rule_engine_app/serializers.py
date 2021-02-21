from rest_framework import serializers
from rule_engine_app.models import RuleEngine


class RuleEngineSerializer(serializers.ModelSerializer):

    class Meta:
        model = RuleEngine
        fields = ('id',
                  'fullName',
                  'address',
                  'DOB',
                  'base_price')
