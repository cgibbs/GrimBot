var env = require('../config.json');

var LennyModule = function () {};

LennyModule.prototype.Message = function(keyword, message, callback)
{
    return callback('( ͡° ͜ʖ ͡°)');
}

module.exports = LennyModule;




