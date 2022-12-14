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
    }, claim: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        var yourDate = new Date()
        if (last_claim == yourDate.toISOString().split('T')[0]) return msg.reply(user.style + " already claimed today")

        db.query(
            `UPDATE Users SET coins = coins + 25, xp = xp + 10, last_claim = "${yourDate.toISOString().split('T')[0]}" WHERE user_id=${user.user_id}`
            , function (error, results, fields) {
                if (error) console.log(error.message);
            });

        msg.reply(user.style + " claimed 25$")
        msg.react("✅")

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }, store: function (msg, value, args, isCommand, client)  {

        var db = require('./db');
        var asuna = require('./asuna');

        var number;
        if (msg.author == "undefined") {
            number = msg.from
        } else if (msg.author == undefined) {
            number = msg.from
        } else {
            number = msg.author
        }

        codeM()
        async function codeM() {
            const codeM = await client.getCountryCode(number)
    
            if (msg.body.includes("mylast")) {
    
            } else {
                var yourDate = new Date()
                var dd = yourDate.toISOString().split('T')[0]

                db.query( // save message
                    `INSERT INTO Messages (number, clearnumber, pushname, message, type, hasMedia, timestamp, deviceType, hasQuotedMsg, isGif, isForwarded, isCommand, date, country_code) 
            VALUES ("${number}","${number.split("@")[0]}","${msg._data.notifyName}","${msg.body}","${msg.type}","${msg.hasMedia}",${msg.timestamp},"${msg.deviceType}","${msg.hasQuotedMsg}","${msg.isGif}","${msg.isForwarded}","${isCommand}","${dd}","${codeM}")`
                    , function (error, results, fields) {
                        if (error) console.log(error.message)
                    });
            }
        }

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}