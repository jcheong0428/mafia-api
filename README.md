# Mafia

## Description
This is an online Mafia game where players are automatically given roles to play the game Mafia. Players are given time to discuss about who is mafia and vote on the person to kill. The person who is blamed as the mafia is given time to defend him or herself. The narration is done automatically, with various storylines. Depending on the number of the players, number of roles differ, too.

## Mockups

### Home
![home](images/Mafia_home.png "home")

### Profile
![profile](images/Mafia_profile.png "profile")

### Directions
![directions](images/Mafia_directions.png "directions")

### Players
![players](images/Mafia_players.png "players")

### Chat
![chat](images/Mafia_chat.png "chat")

## Architecture

### Libraries
We're using React.js to compartmentalize the application, and also to make React Router available to us. We're planning to use Redux for storing the in-game information in global state, like current players, score, and who's in the graveyard.

We need a backend framework, and since we don't really know any better, we're going to use MongoDB with Mongoose and Express.

## Setup

clone this repository to your local filesystem

```sh
$ git clone git@github.com:dartmouth-cs52-17S/project-api-mafia.git
$ cd project-client-mafia
$ npm install
```

You should also clone the frontend repo so you can access the api via a nice client.

```sh
$ git clone git@github.com:dartmouth-cs52-17S/project-client-mafia.git
$ cd project-api-mafia
$ npm install
```

## Deployment

Deployment is done automatically with Travis CI to Surge and Heroku. Simply git push to master, and once travis checks clear, you're good to go. Navigate to [our site](http://mafia.surge.sh) and get going!

## Authors

- Annie Ke '19
- Nitasha Kochar '19
- Sia Peng '20
- Adam Rinehouse '19
- Andy Yoon '19

## Acknowledgments

Thanks to [Tim Tregubov](https://github.com/timofei7) for [this great walkthrough](http://cs52.me/assignments/sa/starterpack/) on building the frontend starterpack, as well as for [the backend starter](https://github.com/dartmouth-cs52/express-babel-starter).

Thanks to [Jason Feng](https://github.com/jason-feng), our global TA, as well.


## Made with starter express app template

* node with babel
* expressjs
* airbnb eslint rules

Procfile set up to run on [heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app), deployed at [https://online-mafia.herokuapp.com/](https://online-mafia.herokuapp.com/)
