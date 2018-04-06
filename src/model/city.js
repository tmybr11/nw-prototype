
'use strict';

module.exports = class City {

  constructor(name, isCapital) {

    this._name = name;
    this._isCapital = isCapital;

  }

  get isCapital() {

    return this._isCapital;

  }

};
