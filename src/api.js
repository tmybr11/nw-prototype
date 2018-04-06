
'use strict';

const app = require('express');
const router = app.Router();
const config = require('./config.js');

const Nation = require('./model/nation.js');
const Battle = require('./model/battle.js');

router.get('/nation', (req, res) => {

  let nations = req.db.get('nations');

  nations.find({}, (err, data) => {

    res.send(data);

  });

});

router.get('/nation/find/:uid', (req, res) => {

  let nations = req.db.get('nations');

  if(req.params.uid.length != 128) throw('Invalid UID provided!');

  nations.find({uid: req.params.uid}, (err, data) => {

    res.send(data);

  });

});

router.get('/nation/playground', (req, res) => {

  let nations = req.db.get('nations');

  nations.find({name: 'abcd'}, (err, data) => {

    res.send(data.getname());

  });

});

router.post('/nation/create', (req, res) => {

  let nations = req.db.get('nations');

  let nation = new Nation({
    name: req.body.name,
    president: req.body.president,
    cities: req.body.cities,
    population: config.game.initial_population,
    militaryPopulation: config.game.initial_military_population,
    education: config.game.initial_education,
    health: config.game.initial_health,
    balance: config.game.initial_balance
  });

  nations.insert(nation.toDocument());

  res.send('Created!');

});

router.get('/battle/:att/:def', (req, res) => {

  let nations = req.db.get('nations');
  let battles = req.db.get('battles');

  nations.findOne({uid: req.params.att}, (err, att) => {

    let attacker = new Nation(att);

    if(!err) {

      nations.findOne({uid: req.params.def}, (err, def) => {

        if(err) throw('Defender not found!');

        let defender = new Nation(def);
        let battle = new Battle(attacker, defender);

        res.send(battle.start());

      });

    } else {

      throw('Attacker not found!');

    }

  });

});

module.exports = router;
