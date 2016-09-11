var env = require('../config.json');
var fs = require('fs');

var filename = './grimbot/currentStuff.json';
var archive = './grimbot/archiveStuff.json';

var SetWhenModule = function () {};

SetWhenModule.prototype.Message = function(keyword, message, callback)
{
    var jsonObject = JSON.parse(fs.readFileSync(filename));
    var jsonArchive = JSON.parse(fs.readFileSync(archive));

    jsonArchive.quotesList.push(jsonObject.bestQuote);
 
    jsonObject.bestQuote = message.content.split(" ").slice(1).join(" ");

    fs.writeFile(filename, JSON.stringify(jsonObject), (err) => { if (err) throw err; });


    fs.writeFile(archive, JSON.stringify(jsonArchive), (err) => { if (err) throw err; });

    return callback('the best quote from last session has been set to be: ' + jsonObject.bestQuote);
}

module.exports = SetWhenModule;
