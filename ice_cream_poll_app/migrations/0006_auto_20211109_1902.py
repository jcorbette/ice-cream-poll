# Generated by Django 3.2.7 on 2021-11-10 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ice_cream_poll_app', '0005_alter_choices_question'),
    ]

    operations = [
        migrations.AddField(
            model_name='choices',
            name='percentage_votes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='choices',
            name='total_votes',
            field=models.IntegerField(default=0),
        ),
    ]
