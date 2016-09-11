var env = require('../config.json');
var fs = require('fs');

var filename = './grimbot/currentStuff.json';

var SetWhenModule = function () {};

SetWhenModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));

    return callback('the best quote from last session was: ' + jsonObject.bestQuote);
}

module.exports = SetWhenModule;
