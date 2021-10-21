# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=64, unique=True)
    description = models.TextField(max_length=1024)
    logo=models.ImageField()
    players = models.ManyToManyField(User, through='Player')

class Player(models.Model):
    user = models.ForeignKey(User)
    team = models.ForeignKey(Team)

