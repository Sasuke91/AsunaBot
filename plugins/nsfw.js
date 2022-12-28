/* AsunaBot
description: send any nsfw image*/

var pluginName = "nsfw"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    download: async function (msg, value, args, user, client, MessageMedia)  {

        if (args.length < 2) return msg.reply(user.style+" > Asuna\n\n Please submit type."+
        "\n\n.nsfw waifu"+
        "\n.nsfw neko"+
        "\n.nsfw trap"+
        "\n.nsfw blowjob"+
        "\n.nsfw ass"+
        "\n.nsfw hentai"+
        "\n.nsfw milf"+
        "\n.nsfw oral"+
        "\n.nsfw paizuri"+
        "\n.nsfw ecchi"+
        "\n.nsfw ero")

        var asuna = require('./asuna');
        var getJSON = require('get-json')
        msg.react("⌛")

        if (args[1] == "waifu" || args[1] == "neko" || args[1] == "trap" || args[1] == "blowjob") {
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
           msg.reply(user.style + " did you use a correct option from .anime list?")
            msg.react("🖤")
        });
        } else {
            getJSON('https://api.waifu.im/search/?included_tags=' + args[1])
            .then(function (response) {
            getJSON('https://animechan.vercel.app/api/random', function (error, res) {
                console.log(res);

                waifu(response.images[0].url)

                async function waifu(url) {
                    var mediaLink = await MessageMedia.fromUrl(url);
                    client.sendMessage(msg.from, mediaLink, { caption: "_" + res.quote + "_ 🖤" }).then(function (res) { }).catch(function (err) { });
                    msg.react("🖤")
                }

            });

        }).catch(function (error) {
            console.log(error);
           msg.reply(user.style + " did you use a correct option from .anime list?")
            msg.react("🖤")
        });
        }



        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}