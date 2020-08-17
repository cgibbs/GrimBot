var env = require('../config.json');
var fs = require('fs');

var filename = './grimbot/forgiveMePadre.json';

var ForgiveMePadreModule = function () {};

ForgiveMePadreModule.prototype.Message = function(keyword, message, callback)
{
	try {
		callbackText = "";
	    var jsonObject = JSON.parse(fs.readFileSync(filename));
	    console.log(jsonObject);

	    var newEntry = {};
	    newEntry.boughtThing = message.content.split(" ").slice(1).join(" ");
	    newEntry.whenBoughtThing = new Date();

	    var oldEntry = jsonObject[message.author.username];

	    if (!oldEntry) {
	    	callbackText = 'This is your first confession. I shall remember this infraction, until next we meet.';
	    } else {
		    callbackText = 'You last succumbed to GAS on ' + oldEntry.whenBoughtThing 
		    	+ ', when you purchased the following: ' + oldEntry.boughtThing 
		    	+ '. I shall remember this new infraction, until next we meet.';
		}

	    jsonObject[message.author.username] = newEntry;
	    console.log(jsonObject);
	    fs.writeFile(filename, JSON.stringify(jsonObject), (err) => { if (err) throw err; });


	    return callback(callbackText);
	} catch (e) { // forgive me, a different padre
		console.log(e);
	}
}

module.exports = ForgiveMePadreModule;
