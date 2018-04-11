
'use strict';

//Vendors
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

//Utilities
const api = require('./src/api.js');
const config = require('./src/config.js');
const db = require('monk')(config.db.mongo_url, {poolSize: 15});

//Models
const Battle = require('./src/model/battle.js');
const Nation = require('./src/model/nation.js');

// Controllers
// const NationController = require('./src/controller/nation-controller.js');

app.set('view engine', 'ejs');
//app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.then(() => {

  app.use((req, res, next) => {

    req.db = db;
    next();

  });

  app.get('/', (req, res) => {

    res.render('index');

  });

  app.use('/api', api);

  app.listen(3000, () => {

    console.log('Listening on port 3000');

  });

}).catch((err) => { console.log(err); });
