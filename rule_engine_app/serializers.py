from rest_framework import serializers
from rule_engine_app.models import RuleEngine


class RuleEngineSerializer(serializers.Serializer):

    class Meta:
        model = RuleEngine
        fields = ('id',
                  'fullName',
                  'adress',
                  'DOB')
