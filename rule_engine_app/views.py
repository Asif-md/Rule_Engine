from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from rule_engine_app.models import RuleEngine
from rule_engine_app.serializers import RuleEngineSerializer
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET', 'POST', 'DELETE'])
def rules_list(request):
    # GET list of rules, POST a new rule, DELETE all rules
    if request.method == 'GET':
        rules = RuleEngine.objects.all()

        fullName = request.GET.get('fullName', None)
        if fullName is not None:
            rules = rules.filter(fullName__icontains=fullName)

        rules_serializer = RuleEngineSerializer(rules, many=True)
        return JsonResponse(rules_serializer.data, safe=False)

    elif request.method == 'POST':
        rule_data = JSONParser().parse(request)
        rule_serializer = RuleEngineSerializer(data=rule_data)
        if rule_serializer.is_valid():
            rule_serializer.save()
            return JsonResponse(rule_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(rule_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def rule_detail(request, pk):
    # find rule by pk (id)
    try:
        rule = RuleEngine.objects.get(pk=pk)
    except RuleEngine.DoesNotExist:
        return JsonResponse({'message': 'The rule does not exist'}, status=status.HTTP_404_NOT_FOUND)

    # GET / PUT / DELETE rule
    if request.method == 'GET':
        rule_serializer = RuleEngineSerializer(rule)
        return JsonResponse(rule_serializer.data)
    elif request.method == 'PUT':
        rule_data = JSONParser().parse(request)
        rule_serializer = RuleEngineSerializer(rule, data=rule_data)
        if rule_serializer.is_valid():
            rule_serializer.save()
            return JsonResponse(rule_serializer.data)
        return JsonResponse(rule_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        rule.delete()
        return JsonResponse({'message': 'Rule was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'DELETE':
        count = RuleEngine.objects.all().delete()
        return JsonResponse({'message': '{} Rules were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
