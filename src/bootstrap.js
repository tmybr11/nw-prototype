const fs = require('fs');

const Config = require('./config.js');

module.exports = function() {

  let getConfig = function() {

    return new Promise((resolve, reject) => {

      fs.readFile('./data/config.dat', (err, data) => {

        if(err) reject(null);

        resolve(data.toString().trim().split('\n'));

      });

    });

  };

  let getConfigTwo = function() {

    return new Promise((resolve, reject) => {

      fs.readFile('./data/config.dat', (err, data) => {

        if(err) reject(null);

        resolve(data.toString().trim().split('\n'));

      });

    });

  };

  return new Promise([])

};
