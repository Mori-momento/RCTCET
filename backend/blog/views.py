from database.models import *
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import AllBlogsSerializer, BlogSerializer



class AllBlogsDisplayView(APIView):

    def get(self,request):
        blogs = Blog.objects.all()
        serializer = AllBlogsSerializer(blogs,context={"request" : request}, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class BlogDisplayView(APIView):

    def get(self,request, pk):
        if Blog.objects.filter(id = pk).exists():
            blog = Blog.objects.get(id = pk)
            serializer = BlogSerializer(blog,context={"request" : request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response("invalid id input", status = status.HTTP_400_BAD_REQUEST)
