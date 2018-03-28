
'use strict';

const Nation = require('./src/nation.js');
const Battle = require('./src/battle.js');
const Config = require('./src/config.js');
const bootstrap = require('./src/bootstrap.js');

bootstrap().then(config => {

  let myNation1 = new Nation({
    name: 'Brazil',
    capital: 'Brasilia'
  }, config[0]);
  let myNation2 = new Nation({
    name: 'Argentina',
    capital: 'Buenos Aires'
  }, config[0]);

  let nation1wincount = 0,
      nation2wincount = 0,
      nation1wincount2 = 0,
      nation2wincount2 = 0;

  for(let i = 0; i < 100; i++) {

    let battle = new Battle(myNation1, myNation2);
    if(battle.start()) {

      nation1wincount++;

    } else {

      nation2wincount++;

    }

  }

  for(let i = 0; i < 100; i++) {

    let battle = new Battle(myNation2, myNation1);
    if(battle.start()) {

      nation1wincount2++;

    } else {

      nation2wincount2++;

    }

  }

  console.log('Nation 1 won ' + nation1wincount + ' times');
  console.log('Nation 2 won ' + nation2wincount + ' times');

  console.log('Nation 1 won ' + nation1wincount2 + ' times when inverted');
  console.log('Nation 2 won ' + nation2wincount2 + ' times when inverted');

}).catch(err => {

  console.log(err);

});
