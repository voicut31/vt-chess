# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.sfish.moves import valid_move

# Create your views here.
@api_view(['GET','POST'])
def check_moves(request):
        if request.method == 'POST':
                return Response({"message": valid_move(request.data['move'], request.data['position']), "data": request.data['move'] })
        return Response({"message": valid_move('x')})
