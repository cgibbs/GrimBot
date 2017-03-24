var env = require('../config.json');
var fs = require('fs');

var GIJoeModule = function () {};

GIJoeModule.prototype.Message = function(keyword, message, callback)
{
	var joes = ["https://www.youtube.com/watch?v=bsoKMKq0qHU",
				"https://www.youtube.com/watch?v=Ww3GTNv9hHk",
				"https://www.youtube.com/watch?v=dsboBHlzwcs",
				"https://www.youtube.com/watch?v=0uVAmxfBnTw",
				"https://www.youtube.com/watch?v=IbbxOrKzbqs",
				"https://www.youtube.com/watch?v=DXFdPTaCtkc",
				"https://www.youtube.com/watch?v=2_ZbBQQ-vps",
				"https://www.youtube.com/watch?v=YP2gJEcRdUk",
				"https://www.youtube.com/watch?v=FF-B8Vc1P3o",
				"https://www.youtube.com/watch?v=zxaDi3InKEo",
				"https://www.youtube.com/watch?v=s75nOHjjScE",
				"https://www.youtube.com/watch?v=RH1ekuvSYzE",
				"https://www.youtube.com/watch?v=q6EoRBvdVPQ"];

    return callback(joes[Math.floor(Math.random() * joes.length)]);
}

module.exports = GIJoeModule;