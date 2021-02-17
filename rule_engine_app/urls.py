from django.conf.urls import url
from rule_engine_app import views

urlpatterns = [
    url(r'^api/rules$', views.rules_list),
    url(r'^api/rules/(?P<pk>[0-9]+)$', views.rule_detail)
]
