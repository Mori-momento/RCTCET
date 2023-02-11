from rest_framework import serializers
from database.models import Blog

class AllBlogsSerializer(serializers.ModelSerializer):

    created  = serializers.SerializerMethodField()
    image    = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = ['id','title','image','created']

    def get_created(self,obj):
        return obj.created.strftime("%d-%b-%Y")

    def get_image(self,obj):
        request = self.context.get('request')
        img = None
        if obj.image :
            img = request.build_absolute_uri(obj.image.url)
        return img


class BlogSerializer(serializers.ModelSerializer):

    created  = serializers.SerializerMethodField()
    image    = serializers.SerializerMethodField()


    class Meta:
        model = Blog
        fields = ['id','title','image','created','body']

    def get_created(self,obj):
        return obj.created.strftime("%d-%b-%Y")

    def get_image(self,obj):
        request = self.context.get('request')
        img = None
        if obj.image :
            img = request.build_absolute_uri(obj.image.url)
        return img

