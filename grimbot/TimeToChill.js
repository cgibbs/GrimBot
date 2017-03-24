var env = require('../config.json');
var fs = require('fs');

var TimeToChillModule = function () {};

TimeToChillModule.prototype.Message = function(keyword, message, callback)
{
    return callback("https://www.youtube.com/watch?v=dmOQzFPfnh0&list=PLqMo-ZRZflH7PC5v0z37Emxiwal6cWAr3&index=1");
}

module.exports = TimeToChillModule;
