module.exports = {

  generateRandomKey: () => {

    let str = '';

    for(let i = 0; i < 16; i++) {

      str += String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    }

    return str;

  },

  generateRandomFloat: (min, max) => {

    return ((Math.random() * max) + min);

  },

  parseConfig: data => {

    return data.toString().trim().split('\n');

  }

};
