const fs = require('fs');

module.exports = class {

  constructor() {

    fs.readFile('../data/config.dat', function(err, data) {

      this._config = data.toString().trim().split('\n');

    });

  }

  async init() {



  }

  get(name) {

    return this._config.filter(config => {

      return config.split(':')[0] === name;

    }).split(':')[1];

  }

};
