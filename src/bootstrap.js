
'use strict';

const fs = require('fs');
const util = require('./util.js');
const Config = require('./config.js');

module.exports = function() {

  let getConfig = new Promise((resolve, reject) => {

    fs.readFile('./data/config.dat', (err, data) => {

      if(err) return reject('Impossible to read configuration file');
      
      return resolve(new Config(util.parseConfig(data)));

    });

  });

  return Promise.all([getConfig]);

};
