const fs = require('fs');

module.exports = class {

  read() {

    return new Promise((resolve, reject) => {

      fs.readFile('./data/config.dat', (err, data) => {

        if(err) reject(null);

        resolve(data.toString().trim().split('\n'));

      });

    });

  }

  get(name) {

    let prop = null;

    this.read().then(data => {

      prop = data.filter(config => {

        return config.split(':')[0] === name;

      }).toString().split(':')[1];

    });

    return prop;

  }

};
