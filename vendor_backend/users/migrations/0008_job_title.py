# Generated by Django 5.1.7 on 2025-04-04 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0007_remove_job_title"),
    ]

    operations = [
        migrations.AddField(
            model_name="job",
            name="title",
            field=models.CharField(default="Untitled Job", max_length=255),
        ),
    ]
