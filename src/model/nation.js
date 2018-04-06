
'use strict';

const util = require('../util.js');
const Scout = require('./scout.js');
const sha512 = require('js-sha512');
const City = require('./city.js');

module.exports = class Nation {

  constructor(options) {

    this._uid = sha512(util.generateRandomKey());
    this._name = options.name;
    this._president = options.president;
    this._militaryPopulation = new Scout(options.militaryPopulation, 1000);
    this._population = new Scout(options.population, 10000);
    this._education = new Scout(options.education, 1);
    this._health = new Scout(options.health, 1);
    this._balance = options.balance;

    /*

    Nation's cities configuration

    */

    this._cities = options.cities; //Initializes cities array
    this._capital = this._cities.filter((city) => {
      return city.isCapital;
    })[0]; //Sets capital

  }

  getUid() { return this._uid; }

  getName() { return this._name; }

  getPresident() { return this._president; }

  getMilitaryPopulation() { return this._militaryPopulation; }

  getPopulation() { return this._population; }

  getBalance() { return this._balance; }

  getCities() { return this._cities; }

  getCapital() { return this._capital; }

  getHealth() { return this._health; }

  getEducation() { return this._education; }

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

  toDocument() {

    return {
      uid: this.getUid(),
      name: this.getName(),
      president: this.getPresident(),
      cities: this.getCities(),
      capital: this.getCapital(),
      population: this.getPopulation().getValue(),
      militaryPopulation: this.getMilitaryPopulation().getValue(),
      health: this.getHealth().getValue(),
      education: this.getEducation().getValue(),
      balance: this.getBalance()
    }

  }

}
