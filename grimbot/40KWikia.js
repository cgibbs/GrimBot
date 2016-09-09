var env = require('../config.json'),
    Wikia = require('node-wikia');

var WikiaModule = function () {
    this.wikiaSearch = new Wikia('warhammer40k');
};

WikiaModule.prototype.Message = function(keyword, message, callback)
{
    // var imgurIndex = message.content.indexOf(keyword);
    // var term = message.content.substring(imgurIndex + keyword.length + 2).trim().replace(/\s/g, "+");

    var term = message.content.split(' ').splice(1).join('+');

    this.wikiaSearch.getSearchList({"query": term}).then(results => {
        if (results === undefined) {
            return callback("Sorry, I couldn't find any articles for the term: " + term);
        }
        var url = results["items"][0]["url"];
        return callback(url);
    });
}

module.exports = WikiaModule;