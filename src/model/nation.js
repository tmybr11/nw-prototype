
'use strict';

const util = require('../util.js');
const Scout = require('./scout.js');
const sha512 = require('js-sha512');
const City = require('./city.js');

module.exports = class Nation {

  constructor(options, config) {

    this._uid = sha512(util.generateRandomKey());
    this._name = options.name;
    this._militaryPopulation = new Scout(config.initial_military_population, 1000);
    this._population = new Scout(config.initial_population, 10000);
    this._education = new Scout(config.initial_education, 1);
    this._health = new Scout(config.initial_health, 1);
    this._balance = config.initial_balance;

    /*

    Nation's cities configuration

    */

    this._cities = options.cities; //Initializes cities array
    this._capital = this._cities.filter((city) => {
      return city.isCapital;
    })[0]; //Sets capital

  }

  get uid() {

    return this._uid;

  }

  get name() {

    return this._name;

  }

  get militaryPopulation() {

    return this._militaryPopulation;

  }

  getScouts() {

    return Object.keys(this).reduce((total, item) => {

      if(this[item] instanceof Scout) return total + this[item].getPoints();

      return total;

    }, 0);

  }

  getCity(name) {

    return this.cities.filter(function(city) {

      return city.name === name;

    })[0];

  }

}
