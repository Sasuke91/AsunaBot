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
            user.style+" ⋆ A S U N A ⋆"
            +"\n\n.me"
            +"\n.song {name}"
            +"\n.bot"
            +"\n.sfw"
            +"\n.nsfw"
            +"\n.slot"
            +"\n.gartic"
            +"\n.flip"
            +"\n.dice"
            +"\n.gay"
            +"\n.wame"
            +"\n.tf2"
            +"\n.translate"
            +"\n.sticker"
            +"\n.send {search}"
            +"\n.gender {name} >"
            +"\n.delete"
            +"\n.user {id / @}"
            +"\n\n.design {emojie}"
            +"\n.bio {bio} >"
            +"\n.username {name}"
            +"\n\n.leaderboard"
            +"\n.garticboard"
            +"\n.slotboard"
        )

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}