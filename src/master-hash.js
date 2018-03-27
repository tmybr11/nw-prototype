
var sha512 = require('js-sha512');
var Util = require('./util.js');

module.exports = function(s1, s2, charCount) {

  let a = sha512(Util.generateRandomKey());
  let b = s1 === undefined ? Util.generateRandomKey() : sha512(s1);
  let c = s2 === undefined ? Util.generateRandomKey() : sha512(s2);

  this.mh = sha512(a + b + c);

  this.charCount = charCount;

  this.getValue = function() {

    let value = 0;

    for(let i = 0; i < this.charCount; i++) {

      value += parseInt(this.mh.charAt(i), 16);

    }

    return value;

  }

  this.getMiddleValue = function() {

    return (this.charCount * 15) / 2;

  }

};
