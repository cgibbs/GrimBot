var env = require('../config.json');
var fs = require('fs');

var filename = './grimbot/currentStuff.json';

var CheckOutModule = function () {};

CheckOutModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));
    var ind = jsonObject.checkedIn.indexOf(message.author.username);
    if (ind > -1) {
        jsonObject.checkedIn.splice(ind, 1);
    }    

    fs.writeFile(filename, JSON.stringify(jsonObject), (err) => { if (err) throw err; });

    return callback('you are no longer checked in for the following session: ' + jsonObject.sessionTime);
}

module.exports = CheckOutModule;