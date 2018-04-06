
'use strict';

//Vendors
const app = require('express')();
const bodyParser = require('body-parser');

//Utilities
const api = require('./src/api.js');
const config = require('./src/config.js');
const db = require('monk')(config.db.mongo_url);

//Models
const Battle = require('./src/model/battle.js');
const Nation = require('./src/model/nation.js');

// //Controllers
// const NationController = require('./src/controller/nation-controller.js');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

  console.log('heyhey');

});

db.then(() => {

  app.use((req, res, next) => {

    req.db = db;
    next();

  });

  app.use('/api', api);

  app.listen(3000, () => {

    console.log('Listening on port 3000');

  });

}).catch((err) => { console.log(err); });

// let myNation1 = new Nation({
//   name: 'Brazil',
//   capital: 'Brasilia'
// }, config.game);
// let myNation2 = new Nation({
//   name: 'Argentina',
//   capital: 'Buenos Aires'
// }, config.game);
