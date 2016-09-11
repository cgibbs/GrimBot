var env = require('../config.json');
var fs = require('fs');

var filename = './grimbot/archiveStuff.json';

var SetWhenModule = function () {};

SetWhenModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));

    return callback('please enjoy a random best quote from the archive: ' + jsonObject.quotesList[Math.floor(Math.random()*jsonObject.quotesList.length)]);
}

module.exports = SetWhenModule;
