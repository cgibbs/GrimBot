var env = require('../config.json');
var fs = require('fs');
var _ = require('lodash');
var Dice = require('node-dice-js');

var filename = './grimbot/currentStuff.json';

var SWDTDTModule = function () {};

SWDTDTModule.prototype.Message = function(keyword, message, callback)
{
	var dice = new Dice();
	var mes = '1d10';
	var results = {};

	results = dice.execute(mes);
	if (results.outcomes[0].total > 9) return callback('Yes, we should do this dumb thing.');
    return callback('No, we should not do this dumb thing.');
}

module.exports = SWDTDTModule;