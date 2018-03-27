const util = require('./util.js');
const Scout = require('./scout.js');
const sha512 = require('js-sha512');
const City = require('./city.js');

module.exports = class {

  constructor(options) {

    let config = new Config();

    config.read().then(config => {

      this._uid = sha512(util.generateRandomKey());
      this._name = options.name;
      this._militaryPopulation = new Scout(config.get('INITIAL_MILITARY_POPULATION'), 1000);
      this._population = new Scout(1000, 10000);
      this._education = new Scout(25, 1);
      this._health = new Scout(25, 1);
      this._balance = 10000;

      /*

      Nation's cities configuration

      */

      this._cities = [new City(options.capital, true)]; //Initially, only the capital exists
      this._capital = this._cities[0]; //Sets capital as the first city

    });

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
