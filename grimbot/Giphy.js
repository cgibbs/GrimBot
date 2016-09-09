var env = require('../config.json'),
    Giphy = require('giphy-wrapper')(env.giphy_key);

var GiphyModule = function () {};

GiphyModule.prototype.Message = function(keyword, message, callback)
{
    var term = message.content.split(' ').splice(1).join('+');

    Giphy.random(term, function (err, data) {
        if(err) {
            return;
        }

        if(data.data.length != 0) {
            return callback(data.data.url);
        }
        return callback(term + " not found");
    });
}

module.exports = GiphyModule;