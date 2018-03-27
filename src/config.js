const fs = require('fs');

module.exports = class {

  get(name) {

    return this._config.filter(config => {

      return config.split(':')[0] === name;

    }).toString().split(':')[1];

  }

};
