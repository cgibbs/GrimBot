var env = require('../config.json');
var fs = require('fs');

var filename = './insombot/currentStuff.json';

var NewSessionModule = function () {};

NewSessionModule.prototype.Message = function(keyword, message, callback)
{
    fs.writeFile(filename, '{"sessionTime":"","checkedIn":["GrimBot"],"whoSetTime":"","whoReset":"' + message.author.username + '"}', (err) => { if (err) throw err; });

    return callback('you have reset the check-in status for a new session.');
}

module.exports = NewSessionModule;