# Generated by Django 2.1.7 on 2019-04-01 14:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('exams', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='classexamrecord',
            old_name='attend_student',
            new_name='attend_count',
        ),
    ]
