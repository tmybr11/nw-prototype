
'use strict';

const expect = require('chai').expect;
const bootstrap = require('../src/bootstrap.js');
const mongo = require('mongodb').MongoClient;

it('database connection okay', (done) => {

  bootstrap().then(config => {

    mongo.connect(config[1].getProp('MONGO_URL'), (err, db) => {

      expect(err).to.equal(null);
      done();

    });

  });

});
