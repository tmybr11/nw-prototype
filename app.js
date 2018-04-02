
'use strict';

const mongo = require('mongodb').MongoClient;
const app = require('express')();
const bodyParser = require('body-parser');

const api = require('./src/api.js');
const bootstrap = require('./src/bootstrap.js');
const Battle = require('./src/battle.js');
const Config = require('./src/config.js');
const Nation = require('./src/nation.js');

bootstrap().then((config) => {

  app.use(bodyParser.json());
  //app.use(bodyParser.urlencoded({extended: true}));

  app.get('/', (req, res) => {

    console.log('heyhey');

  });

  app.listen(3000, () => {

    console.log('App listening on port 3000');

  });

  app.use('/api', api);

  let myNation1 = new Nation({
    name: 'Brazil',
    capital: 'Brasilia'
  }, config[0]);
  let myNation2 = new Nation({
    name: 'Argentina',
    capital: 'Buenos Aires'
  }, config[0]);

  // console.log(config[1].getProp('MONGO_URL'));
  //
  // mongo.connect(config[1].getProp('MONGO_URL'), (err, db) => {
  //
  //   if (err) throw err;
  //
  //   let dbo = db.db('nwmongo');
  //
  //   dbo.collection('nations').insertMany([myNation1, myNation2], (err, res) => {
  //
  //     if (err) throw err;
  //
  //     console.log("2 nations inserted!");
  //
  //     db.close();
  //
  //   });
  //
  // });

}).catch(err => {

  console.log(err);

});
