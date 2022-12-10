/* AsunaBot
description: send any sfw image*/

var pluginName = "sfw"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    download: async function (msg, value, args, user, client, MessageMedia)  {

        if (args.length < 2) return msg.reply(user.style+" > Asuna\n\n Please submit type."+
        "\ņ\n.sfw waifu"+
        "\ņ.sfw neko"+
        "\ņ.sfw megumin"+
        "\ņ.sfw bully"+
        "\ņ.sfw cuddle"+
        "\ņ.sfw cry"+
        "\ņ.sfw hug"+
        "\ņ.sfw awoo"+
        "\ņ.sfw kiss"+
        "\ņ.sfw lick"+
        "\ņ.sfw pat"+
        "\ņ.sfw smug"+
        "\ņ.sfw bonk"+
        "\ņ.sfw yeet"+
        "\ņ.sfw blush"+
        "\ņ.sfw smile"+
        "\ņ.sfw wave"+
        "\ņ.sfw highfive"+
        "\ņ.sfw handhold"+
        "\ņ.sfw nom"+
        "\ņ.sfw bite"+
        "\ņ.sfw glomp"+
        "\ņ.sfw slap"+
        "\ņ.sfw kill"+
        "\ņ.sfw kick"+
        "\ņ.sfw happy"+
        "\ņ.sfw wink"+
        "\ņ.sfw poke"+
        "\ņ.sfw dance"+
        "\ņ.sfw cringe"+
        "\ņ\n.nsfw waifu"+
        "\ņ.nsfw neko"+
        "\ņ.nsfw trap"+
        "\ņ.nsfw blowjob")

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