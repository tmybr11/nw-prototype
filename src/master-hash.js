
var sha512 = require('js-sha512');
var Util = require('./util.js');

module.exports = function(s1, s2, charCount) {

  this.mh = sha512(sha512(Util.generateRandomKey()) +
                  sha512(s1) +
                  sha512(s1));

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
