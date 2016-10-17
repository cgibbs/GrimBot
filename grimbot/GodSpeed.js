var env = require('../config.json');
var fs = require('fs');

var GodSpeedModule = function () {};

GodSpeedModule.prototype.Message = function(keyword, message, callback)
{
    return callback("https://www.youtube.com/watch?v=oRfkIE-fDnc");
}

module.exports = GodSpeedModule;
