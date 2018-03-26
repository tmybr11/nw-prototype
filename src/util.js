module.exports = {

  generateRandomKey: function() {

    let str = '';

    for(let i = 0; i < 16; i++) {

      str += String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);

    }

    return str;

  },

  generateRandomFloat: function(min, max) {

    return ((Math.random() * max) + min);

  },

};
