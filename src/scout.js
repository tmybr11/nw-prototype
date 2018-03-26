module.exports = function(value, scale) {

  this.value = value;
  this.scale = scale;

  this.getPoints = function() {

    return this.value / this.scale;

  }

};
