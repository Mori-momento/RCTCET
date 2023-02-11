from django.db import models

# Create your models here.

class Blog(models.Model):
    title    = models.CharField(max_length=100)
    image    = models.ImageField( upload_to='media', blank=True, null=True)
    created  = models.DateTimeField(auto_now_add=True,null=True)    
    body     = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

# class BlogBody(models.Model):
#     blog   = models.ManyToManyField(Blog, related_name="blog")
#     order  = models.IntegerField(null=True,blank=True)

# class BlogMedia(models.Model):
#     blog   = models.ManyToManyField(Blog, related_name="blog")
#     image  = models.ImageField( upload_to='media', max_length=None)
#     order  = models.IntegerField(null=True,blank=True)