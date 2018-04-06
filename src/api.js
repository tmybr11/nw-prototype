
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

router.get('/nation/find/:id', (req, res) => {

  let nations = req.db.get('nations');

  if(req.params.id.length != 24) throw('Invalid ID provided!');

  nations.find({_id: req.params.id}, (err, data) => {

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
    cities: req.body.cities
  }, config.game);

  nations.insert(nation);

});

router.get('/battle/:att/:def', (req, res) => {

  let nations = req.db.get('nations');
  let battles = req.db.get('battles');

  nations.find({_id: req.params.att}, (err, att) => {

    let attacker = att;

    if(!err) {

      nations.find({_id: req.params.def}, (err, def) => {

        if(err) throw('Defender not found!');

        let defender = def;
        let battle = new Battle(attacker, defender);

        res.send(battle.start());

      });

    } else {

      throw('Attacker not found!');

    }

  });

});

module.exports = router;
