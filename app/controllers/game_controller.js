import Game from '../models/game_model';

export const createGame = (req, res, next) => {
  console.log('createGame');
  const game = new Game();
  game.currentGameStage = 0;
  game.players = [req.user];
  game.creator = req.user;
  game.save()
  .then((response) => {
    res.send(response);
  })
  .catch((err) => {
    if (err) res.sendStatus(500);
  });
};

// export const getPlayer = (req, res) => {
//   Game.findById(req.username).then((data) => {
//     res.send(data);
//   });
// };

export const getGames = (req, res) => {
  Game.find({}).then((data) => {
    res.send(data);
  });
};

export const updatePlayers = (req, res) => {
  Game.findOne({ creator: req.body.fbid }).then((game) => {
    console.log(game);
    game.players = [...game.players, req.body.fbid];
    res.send(req.body.fbid);
  });
};

export const getPlayers = (req, res) => {
  Game.find({}).then((data) => {
    res.send(data);
  });
};
