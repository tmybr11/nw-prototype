const fs = require('fs');

fs.readFile('./data/config.dat', function(err, data) {

  let config = data.toString();

  console.log(config.trim().split('\n'));

});
