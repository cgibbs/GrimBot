var env = require('../config.json');
var fs = require('fs');

var filename = './insombot/currentStuff.json';

var CheckInModule = function () {};

CheckInModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));

    jsonObject.sessionTime = message.content.split(" ").slice(1).join(" ");
    jsonObject.whoSetTime = message.author.username;

    fs.writeFile(filename, JSON.stringify(jsonObject), (err) => { if (err) throw err; });

    return callback('the next session has been set to be on ' + jsonObject.sessionTime);
}

module.exports = CheckInModule;