var env = require('../config.json');
var fs = require('fs');
var _ = require('lodash');
var Dice = require('node-dice-js');

var filename = './grimbot/currentStuff.json';

var RollModule = function () {};

RollModule.prototype.Message = function(keyword, message, callback)
{
	var dice = new Dice();
	var mes = message.content.split(' ').slice(1);
	var results = {};

	try {
		results = dice.execute(mes[0]);
	} catch (err) {
		return callback(err.message, 'not a valid format. Try something like \'4d20\' (blaze it).')
	}

    return callback(results.text);
}

module.exports = RollModule;