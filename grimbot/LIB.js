var env = require('../config.json');
var fs = require('fs');

var filename = './grimbot/currentStuff.json';

var LIBModule = function () {};

LIBModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));

    return callback('you are an indecisive little bitch for the following session: ' + jsonObject.sessionTime);
}

module.exports = LIBModule;
