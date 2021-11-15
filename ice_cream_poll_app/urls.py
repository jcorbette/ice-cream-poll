from django.urls import path

from . import views

urlpatterns = [
    path('', views.homePage, name="home-page"),    
    path('about/', views.aboutPage, name="about-page"),
    path('flavours/', views.flavoursPage, name="flavours-page"),
    path('vote/', views.votePage, name="voting-page"),
    path('results/<str:pk>', views.resultsPage, name="results-page"),
]
