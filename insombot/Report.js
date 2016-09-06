var env = require('../config.json');
var fs = require('fs');

var filename = './insombot/currentStuff.json';

var ReportModule = function () {};

ReportModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));

    return callback('The following users are checked in for the session for ' + jsonObject.sessionTime + ': ' + jsonObject.checkedIn.join(', '));
}

module.exports = ReportModule;