# Generated by Django 4.0 on 2022-11-22 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserCredits',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(blank=True, max_length=100, null=True)),
                ('credits', models.IntegerField(default=0)),
                ('product_name', models.CharField(blank=True, max_length=40, null=True)),
            ],
        ),
    ]
