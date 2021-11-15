from django.shortcuts import render
from .models import Questions, Choices
from django.db.models import Sum

# Create your views here.
def homePage(request):
    return render(request, "index.html")

def aboutPage(request):
    return render(request, "about.html")

def flavoursPage(request):
    return render(request, "flavours.html")
    
def votePage(request):
    questions = Questions.objects.all()
    question = Questions.objects.get()
    options = question.choices.all()
    return render(request, "vote.html", {"questions": questions, "question": question, "options": options})

def resultsPage(request, pk):
    question = Questions.objects.get(id=pk)
    options = question.choices.all()
    if request.method == "POST":
        input_value = request.POST["choice"]
        selection_option = options.get(id=input_value)
        selection_option.vote += 1
        selection_option.save()

    return render(request, "results.html", {"options": options})

