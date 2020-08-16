var env = require('../config.json');
var fs = require('fs');

var filename = './grimbot/forgiveMePadre.json';

var ForgiveMePadreModule = function () {};

ForgiveMePadreModule.prototype.Message = function(keyword, message, callback)
{
	try {
	    var jsonObject = JSON.parse(fs.readFileSync(filename));

	    var newEntry = {};
	    newEntry.boughtThing = message.content.split(" ").slice(1).join(" ");
	    newEntry.whenBoughtThing = new Date();

	    var oldEntry = jsonObject[message.author.username];

	    jsonObject[message.author.username] = newEntry;

	    fs.writeFile(filename, JSON.stringify(jsonObject), (err) => { if (err) throw err; });

	    callbackText = 'You last succumbed to GAS on ' + oldEntry.whenBoughtThing 
	    	+ ', when you purchased the following: ' + oldEntry.boughtThing 
	    	+ '. I shall remember this new infraction, until next we meet.';
	    if (!oldEntry) {
	    	callbackText = 'This is your first confession. I shall remember this infraction, until next we meet.';
	    }

	    return callback(callbackText);
	} catch (e) { // forgive me, a different padre
		console.log(e);
	}
}

module.exports = ForgiveMePadreModule;
