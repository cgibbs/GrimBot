var env = require('../config.json');

var HelpModule = function () {
    this.keywords = env.keywords;
};

HelpModule.prototype.Message = function(keywords, message, callback)
{
    var words = this.getKeywords() + '';
    return callback("https://github.com/cgibbs/GrimBot/blob/master/readme.md");
}

module.exports = HelpModule;