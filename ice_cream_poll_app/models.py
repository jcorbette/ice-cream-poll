from django.db import models
from django.db.models import Sum

# Create your models here.
class Questions(models.Model):
    question = models.CharField(max_length=350)
    
    def __str__(self):
        return self.question

class Choices(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE, related_name='choices')
    option = models.CharField(max_length=100)
    vote = models.IntegerField(default=0)


    def get_percentage(self):
        total_votes = Choices.objects.all().aggregate(vote_sum=Sum("vote"))["vote_sum"]
        vote_num  = self.vote
        percentage_calc = (vote_num / total_votes) * 100
        
        return percentage_calc
        
      
