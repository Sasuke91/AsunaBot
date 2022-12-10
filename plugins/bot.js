/* AsunaBot
description: welcome user*/

var pluginName = "bot"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    reply: function (msg, value, args)  {

        var db = require('./db');
        var user = require('./user.js');
        var asuna = require('./asuna');


        user.details(msg, function(user){
            // returns false or user
            if (user != false) {
                msg.reply(user.style+" Hey "+user.username)
            }
        });

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)


    }
}