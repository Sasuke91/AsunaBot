/* AsunaBot
description: change user settings information*/

var pluginName = "setting"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    set: function (msg, value, args, user, target, replacement)  {
        var set = require('./set.js');
        var db = require('./db');
        var asuna = require('./asuna');

        if (args.length < 1) return msg.reply(`${user.style} enter replacement`)
        set.info(msg, target,replacement, function(success){
            // returns false or user
            if (success) {
                return msg.reply(user.style+" <> Asuna accepted your request")
            } else {
                return msg.reply(user.style+" <> Asuna ran into an error")
            }
        });
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}