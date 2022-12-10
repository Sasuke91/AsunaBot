/* AsunaBot
description: welcome user*/

var pluginName = "bot"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    reply: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        if (args.length < 2) return msg.reply(user.style+" Hey "+user.username)
                     
        var alexa = require("alexa-bot-api-v4");
        var ai = new alexa();

        // [] represents context, since it's an array
        ai.getReply(`${value}`, [], "english", "O_o").then((replys) => {

            //Do your stuffs with the reply
            console.log(user.style + " " + replys);
           msg.reply(`${user.style} ${replys}`)

        });

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}