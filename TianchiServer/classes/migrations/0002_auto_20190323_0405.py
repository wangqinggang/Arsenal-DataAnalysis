# Generated by Django 2.1.7 on 2019-03-23 04:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='grade_name',
            field=models.IntegerField(choices=[(0, '初三'), (1, '高一'), (2, '高二'), (3, '高三')]),
        ),
    ]
