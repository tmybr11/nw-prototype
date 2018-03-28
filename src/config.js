
'use strict';

module.exports = class Config {

  constructor(data) {

    this._config = data;

  }

  getProp(name) {

    return this._config.filter(config => {

      return config.split(' ')[0] === name;

    }).toString().split(' ')[1];

  }

};
