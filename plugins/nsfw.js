/* AsunaBot
description: send any nsfw image*/

var pluginName = "nsfw"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    download: async function (msg, value, args, user, client, MessageMedia)  {

        if (args.length < 2) return msg.reply(user.style+" > Asuna\n\n Please submit type."+
        "\ņ\ņ.nsfw waifu"+
        "\ņ.nsfw neko"+
        "\ņ.nsfw trap"+
        "\ņ.nsfw blowjob")

        var asuna = require('./asuna');
        var getJSON = require('get-json')
        msg.react("⌛")

        getJSON('https://api.waifu.pics/nsfw/' + args[1])
            .then(function (response) {
            getJSON('https://animechan.vercel.app/api/random', function (error, res) {
                console.log(res);

                waifu(response.url)

                async function waifu(url) {
                    var mediaLink = await MessageMedia.fromUrl(url);
                    client.sendMessage(msg.from, mediaLink, { caption: "_" + res.quote + "_ 🖤" }).then(function (res) { }).catch(function (err) { });
                    msg.react("🖤")
                }

            });

        }).catch(function (error) {
            console.log(error);
            reply(user.style + " did you use a correct option from .anime list?")
            msg.react("🖤")
        });

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}