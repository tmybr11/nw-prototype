
var config = require('./config.js');
var MasterHash = require('./master-hash.js');

module.exports = function(n1, n2) {

  this.start = function() {

    //Generates master SHA512 hash from nation 1 hash, nation 2 hash and the battle hash
    let masterHash = new MasterHash(n1.uid, n2.uid, 2);

    //Takes the first two characters from the master hash, converts each of them to decimal numbers
    //and calculates the sum of both
    let hashValue = masterHash.getValue();

    //Adds to nations scouts their attributes
    let nation1scouts = n1.getScouts();
    let nation2scouts = n2.getScouts();

    //If one of the nations have 0 as scouts value, the other nation automatically wins
    if(nation1scouts === 0) return false;
    else if(nation2scouts === 0) return true;

    //Middle value change factor
    let factor = nation1scouts / nation2scouts;

    if(factor < 1) factor = nation2scouts / nation1scouts;

    let middleValue = masterHash.getMiddleValue();

    if(nation1scouts > nation2scouts) middleValue -= factor;
    else if(nation1scouts < nation2scouts) middleValue -= factor;

    return hashValue >= middleValue;

  };

};
