# Generated by Django 3.2.7 on 2021-11-10 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ice_cream_poll_app', '0007_auto_20211109_2054'),
    ]

    operations = [
        migrations.AddField(
            model_name='choices',
            name='percentage',
            field=models.IntegerField(default=0),
        ),
    ]
