/* AsunaBot
description: send any image*/

var pluginName = "send"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    download: async function (msg, value, args, user, client, MessageMedia)  {

        var asuna = require('./asuna');

        if (value.includes("sex ") || value.includes("porn") || value.includes("dead") || value.includes("dick") || value.includes("cock") || value.includes("nigger") || value.includes("pussy") || value.includes("nude") || value.includes("pussy")) return reply(style + " this term is not allowed. You can use .anime command instead")
        msg.react("⌛")

        var gis = require('g-i-s');
        gis(value, logResults);

        async function logResults(error, results) {
            if (error) {
                console.log(error);
                msg.reply("error lol\n\n" + error.message)
                msg.react("❌")
            } else {
                console.log(JSON.stringify(results, null, '  '));

                async function sendImgsS(link, number, text) {
                    const mediaLink = await MessageMedia.fromUrl(link);
                    client.sendMessage(number, mediaLink, { caption: text }).then(function (res) { }).catch(function (err) { });
                    msg.react("🖤")
                }

                sendImgsS(results[0].url, msg.from, `${user.style} _${value}_`).then(function () { });
            }
        }
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}