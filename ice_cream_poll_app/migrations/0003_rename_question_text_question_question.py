# Generated by Django 3.2.7 on 2021-11-09 21:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ice_cream_poll_app', '0002_rename_choice_choices'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='question_text',
            new_name='question',
        ),
    ]
