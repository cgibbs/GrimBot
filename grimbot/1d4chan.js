var env = require('../config.json'),
    Wikia = require('node-wikia'),
    Bot = require('nodemw'),
    Promise = require('bluebird');

var d4chanModule = function () {
    this.d4chan = new Bot({
    server: '1d4chan.org',  // host name of MediaWiki-powered site
    path: '',                  // path to api.php script
    debug: true                 // is more verbose when set to true
  });
};

d4chanModule.prototype.Message = function(keyword, message, callback)
{
    // var imgurIndex = message.content.indexOf(keyword);
    // var term = message.content.substring(imgurIndex + keyword.length + 2).trim().replace(/\s/g, "+");

    var term = message.content.split(' ').splice(1).join('+');

//     Promise.promisify(this.d4chan.getArticle)(term, function(err, data) {
//     // error handling
//     if (err) {
//       console.error(err);
//       return err;
//     }
//     return data;
// })).then(results => {
//         if (results === undefined) {
//             return callback("Sorry, I couldn't find any articles for the term: " + term);
//         }
//         var url = results;
//         return callback(url);
//     });
// }
    
    return callback(this.d4chan.search(term, function(err, data) {
        if (data === undefined) {
            return callback("Sorry, I couldn't find any articles for the term: " + term);
        }
        return callback('https://1d4chan.org/wiki/' + data[0]['title'].split(' ').join('_'));
    }));
}

module.exports = d4chanModule;