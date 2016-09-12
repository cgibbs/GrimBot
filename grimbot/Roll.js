var env = require('../config.json');
var fs = require('fs');
var _ = require('lodash');
var dice = require('droll');

var filename = './grimbot/currentStuff.json';

var RollModule = function () {};

RollModule.prototype.Message = function(keyword, message, callback)
{
	var mes = message.content.split(' ').slice(1).join(' ');

	return dice.validate(mes) ? callback(dice.roll(mes)) : callback('not a valid format. Try something like \'4d20\' (blaze it) (eyyyy).')
}

module.exports = RollModule;