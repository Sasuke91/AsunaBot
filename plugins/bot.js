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
    }, delete: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        deleteMsg(msg)
        async function deleteMsg(msg) {

            try {
                const quotedMsg = await msg.getQuotedMessage();
                if (msg.hasQuotedMsg) {
                    if (quotedMsg.fromMe) {
                        quotedMsg.delete(true);
                    } else {
                        msg.reply(user.style + ' I can only delete my own messages');
                    }
                }
            } catch (err) {
                msg.reply(user.style + " There was an error. Cryptic error message:\n\n" + err.message)
            }
        }

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}