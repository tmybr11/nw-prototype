
'use strict';

const app = require('express');
const router = app.Router();

router.get('/nation/:id', (req, res) => {

  console.log('hello');
  res.send('You asked for nation ' + req.params.id);

});

router.post('/nation/create', (req, res) => {

  let resp = '';

  Object.keys(req.body).forEach((item) => {

    resp += req.body[item];

  });

  res.send(resp);

});

module.exports = router;
