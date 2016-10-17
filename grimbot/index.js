var env = require('../config.json'),
    Commands = require('./Commands.js'),
    Help = require('./Help.js'),
    Imgur = require('./Imgur.js'),
    Giphy = require('./Giphy.js'),
    Urban = require('./Urban.js'),
    CheckIn = require('./CheckIn.js'),
    CheckOut = require('./CheckOut.js'),
    NewSession = require('./NewSession.js'),
    Report = require('./Report.js'),
    Roll = require('./Roll.js'),
    When = require('./When.js'),
    SetWhen = require('./SetWhen.js'),
    SWDTDT = require('./ShouldWeDoThisDumbThing.js'),
    Wikia40K = require('./40KWikia.js'),
    D4chan = require('./1d4chan.js'),
    ForgetAboutDre = require('./ForgetAboutDre.js'),
    SetBestQuote = require('./SetBestQuote.js'),
    BestQuote = require('./BestQuote.js'),
    RandomBestQuote = require('./RandomBestQuote.js'),
    LIB = require('./LIB.js'),
    GodSpeed = require('./GodSpeed.js');

var InsomBot = function () {
    this.keywords = env.keywords;
    this.Commands = new Commands;
    this.Help = new Help;
    this.Imgur = new Imgur;
    this.Giphy = new Giphy;
    this.Urban = new Urban;
    this.CheckIn = new CheckIn;
    this.CheckOut = new CheckOut;
    this.NewSession = new NewSession;
    this.Report = new Report;
    this.Roll = new Roll;
    this.When = new When;
    this.SetWhen = new SetWhen;
    this.SWDTDT = new SWDTDT;
    this.Wikia40K = new Wikia40K;
    this.D4chan = new D4chan;
    this.ForgetAboutDre = new ForgetAboutDre;
    this.SetBestQuote = new SetBestQuote;
    this.BestQuote = new BestQuote;
    this.RandomBestQuote = new RandomBestQuote;
    this.LIB = new LIB;
    this.GodSpeed = new GodSpeed;
};

InsomBot.prototype.loadKeywords = function ()
{
    var result = [];
    for (var i in this.keywords) {
        if (this.keywords.hasOwnProperty(i)) {
            result.push(this.keywords[i]);
        }
    }
    return result;
}

InsomBot.prototype.checkMessageForKeywords = function(message, triggers, callback)
{
    for(var i = 0; i != triggers.length; i++) {
        var substring = triggers[i];
        if (message.indexOf(substring) == 0) {
            return callback(substring);
        }
    }
    return callback(0);
}

InsomBot.prototype.getKeyByValue = function(object, value)
{
    for(var prop in object) {
        if(object.hasOwnProperty(prop)) {
            if(object[prop] == value)
                return prop;
        }
    }
}

InsomBot.prototype.runKeywordFunction = function(keywordFunction, keyword, message, callback)
{
    this[keywordFunction].Message(keyword, message, callback);
}

module.exports = InsomBot;
