var env = require('../config.json'),
    Imgur = require("imgur-search");

var ImgurModule = function () {
    this.imgSearch = new Imgur(env.imgur_key);
};

ImgurModule.prototype.Message = function(keyword, message, callback)
{
    var term = message.content.split(' ').splice(1).join('+');

        this.imgSearch.search(term).then(function(results) {
            if (results === undefined || results.length === 0) {
                return callback("Sorry, I couldn't find any imgurs for the term: " + term);
            }
            var image = results[Math.floor(Math.random() * results.length)];
            return callback(image.link);
        });
}

module.exports = ImgurModule;
