/* AsunaBot
description: menu information*/

var pluginName = "menu"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    reply: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        msg.reply(
            "< AsunaBot >"
            +"\n\n.me"
            +"\n.user < id / @ >"
            +"\n.song < name >"
            +"\n.bot"
            +"\n.sfw"
            +"\n.nsfw"
            +"\n.slot"
            +"\n.gartic"
            +"\n.flip"
            +"\n.dice"
            +"\n.gay"
            +"\n.wame"
            +"\n.calc"
            +"\n.translate"
            +"\n.sticker"
            +"\n.leaderboard"
            +"\n.garticboard"
            +"\n.slotboard"
            +"\n.send"
            +"\n.delete"
            +"\n.design"
            +"\n.bio"
            +"\n.username"
        )

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}