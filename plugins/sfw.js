/* AsunaBot
description: send any sfw image*/

var pluginName = "sfw"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    download: async function (msg, value, args, user, client, MessageMedia)  {

        if (args.length < 2) return msg.reply(user.style+" > Asuna\n\n Please submit type."+
        "\n\n.sfw waifu"+
        "\n.sfw neko"+
        "\n.sfw megumin"+
        "\n.sfw bully"+
        "\n.sfw cuddle"+
        "\n.sfw cry"+
        "\n.sfw hug"+
        "\n.sfw awoo"+
        "\n.sfw kiss"+
        "\n.sfw lick"+
        "\n.sfw pat"+
        "\n.sfw smug"+
        "\n.sfw bonk"+
        "\n.sfw yeet"+
        "\n.sfw blush"+
        "\n.sfw smile"+
        "\n.sfw wave"+
        "\n.sfw highfive"+
        "\n.sfw handhold"+
        "\n.sfw nom"+
        "\n.sfw bite"+
        "\n.sfw glomp"+
        "\n.sfw slap"+
        "\n.sfw kill"+
        "\n.sfw kick"+
        "\n.sfw happy"+
        "\n.sfw wink"+
        "\n.sfw poke"+
        "\n.sfw dance"+
        "\n.sfw cringe"+
        "\n\n.nsfw waifu"+
        "\n.nsfw neko"+
        "\n.nsfw trap"+
        "\n.nsfw blowjob")

        var asuna = require('./asuna');
        var getJSON = require('get-json')
        msg.react("⌛")

        getJSON('https://api.waifu.pics/sfw/' + args[1])
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