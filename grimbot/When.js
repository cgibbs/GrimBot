var env = require('../config.json');
var fs = require('fs');

var filename = './insombot/currentStuff.json';

var WhenModule = function () {};

WhenModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));

    return callback('The next session is set to happen on ' + jsonObject.sessionTime);
}

module.exports = WhenModule;