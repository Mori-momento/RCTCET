from django.urls import path
from .views import AllBlogsDisplayView, BlogDisplayView

urlpatterns = [
    path('', AllBlogsDisplayView.as_view()),
    path('<int:pk>', BlogDisplayView.as_view()),
    
]