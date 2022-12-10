/* AsunaBot
description: menu information*/

var pluginName = "games"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    flip: function (msg, value, args, user)  {
        var set = require('./plugins/set.js');
        var db = require('./db');
        var asuna = require('./asuna');

        // (max - min + 1) + min)
        var rndInt = Math.floor(Math.random() * (2 - 1 + 1) + 1)

        if (rndInt == 1) {
            msg.reply("🦅 tails")
            msg.react("🦅")
        } else {
            msg.reply("🗽 heads")
            msg.react("🗽")
        }
      
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }, dice: function (msg, value, args, user)  {
        var set = require('./plugins/set.js');
        var db = require('./db');
        var asuna = require('./asuna');

        msg.react("🎲")

        var rndInt = Math.floor(Math.random() * (6 - 1 + 1) + 1)

        msg.reply(user.style + " " + rndInt)
      
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }, gay: function (msg, value, args, user)  {
        var set = require('./plugins/set.js');
        var db = require('./db');
        var asuna = require('./asuna');

        var rndInt = Math.floor(Math.random() * (100 - 1 + 1) + 1)

        msg.reply(" 𓂸 subject is "+rndInt+ "% gay")
      
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}