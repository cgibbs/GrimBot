var env = require('../config.json');
var fs = require('fs');

var filename = './insombot/currentStuff.json';

var CheckInModule = function () {};

CheckInModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));
    if (jsonObject.checkedIn.indexOf(message.author.username) == -1) {
        jsonObject.checkedIn.push(message.author.username);
    }

    fs.writeFile(filename, JSON.stringify(jsonObject), (err) => { if (err) throw err; });

    return callback('you are now checked in for the following session: ' + jsonObject.sessionTime);
}

module.exports = CheckInModule;