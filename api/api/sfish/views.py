# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.sfish.moves import valid_move

# Create your views here.


@api_view(['GET', 'POST'])
def check_moves(request):
    if request.method == 'POST':
        try:
            computer = request.data['computer']
        except KeyError:
            computer = {
                'play_with_computer': 0
            }

        return Response({"message": valid_move(request.data['move'], request.data['position'], computer)})
        pass
    return Response({"message": valid_move('x')})
