# API Readme





## Documentation

1. https://www.django-rest-framework.org/tutorial/quickstart/

1.1. Install django: 
```
pip3 install django
pip3 install djangorestframework
```

1.3. Start server

```
python3 manage.py runserver
```

1.4. Run migrations
```
python3 manage.py migrate
```

1.5. Create admin user
```
python3 manage.py createsuperuser --email admin@example.com --username admin
```

1.6. Install django cors headers
```
pip3 install django-cors-headers
```

1.7. Install python-chess
```
pip3 install python-chess
```

## Ratings

Player's rating is adjusted after each game based on a) the result of the game (win, loss, draw); b) on how many rated games they have completed previously; and c) on the opponent's rating.

In the beginning and during the first 5 rated games, player's rating is set at 1200. Starting with the 6th rated game, player's rating will be adjusted after each game.

The first 20 games are used to establish the player's rating. During that time, player's rating is calculated as an average of the ratings of their opponents, +400 in case of a win, -400 in case of a loss, same for a draw. +/-200 points are used when playing against another player with a provisional rating (i.e. less than 20 rated games completed).

Starting with the 21st rated game, player's rating is considered established and Elo formula is used with a fixed K = 20. The formula uses statistical analysis and basically boils down to — winning against higher rating players gives you more points, winning against lower rated players gives you just a few points, and losing against lower rated players takes away a lot of points, and losing against higher rated players takes away just a few points, etc..

The higher of the two ratings, at the beginning of the game and at the end, is used to calculate the rating adjustments for each player after the game is over.

Short game: if a game ends with 2 or fewer moves made, it will have no effect on the players' ratings (it will be treated as an unrated game). Please note that short games still affect tournament/mini-tournament/etc. results/tables, only the players' ratings are not affected by short games.

Rating floor: to calculate one's rating floor, subtract 200 from the player's highest rating, and then round down to the nearest hundred. If the player's rating falls below their rating floor, it will be reset to be equal to the rating floor (i.e. it can never fall below the floor). Rating floor has no effect during the first 20 rated games (i.e. during the provisional rating period).
The rating floor is automatically reduced by 100 points when player's rating stays within 30 points of their rating floor for 90 days.

Examples: if during your first 20 rated games, you played 3 games and you won against 1200 player with provisional rating, then against 1400 player with established rating, but lost against 1600 player with established rating, your rating will be: ( (1200 + 200) + (1400 + 400) + (1600 - 400) ) / 3 = 1467

Or, if during your first 20 rated games, you win against 1200 provisional, win against 1400 established, lose against 1600 provisional, draw against 1500, your rating will be: ( (1200 + 200) + (1400 + 400) + (1600 - 200) + 1500 ) / 4 = 1525
