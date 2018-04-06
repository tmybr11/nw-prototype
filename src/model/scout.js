module.exports = class Scout {

  constructor(value, scale) {
    this._value = value;
    this._scale = scale;
  }

  getPoints() {

    return this._value / this._scale;

  }

  getScale() {

    return this._scale;

  }

  getValue() {

    return this._value;

  }

};
