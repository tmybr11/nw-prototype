
'use strict';

var config = {};

config.db = {};
config.game = {};

config.db.mongo_url = 'mongodb://localhost:27017/nationsworld';
config.db.redis_url = '127.0.0.1:6379';

config.game.initial_balance = 50;
config.game.initial_education = 50;
config.game.initial_health = 50;
config.game.initial_military_population = 2000;
config.game.initial_population = 50000;
config.game.max_indicators_value = 100;

module.exports = config;
