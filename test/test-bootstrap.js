
'use strict';

const bootstrap = require('../src/bootstrap.js');

it('bootstrap loads configuration files okay', (done) => {

  bootstrap().then(config => {

    expect(config).to.not.equal(undefined);

  }).catch();

});
