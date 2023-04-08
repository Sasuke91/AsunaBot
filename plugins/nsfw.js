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
"\n.nsfw ero"+
"\n.nsfw Pussy"+
"\n.nsfw Spreadpussy"+
"\n.nsfw Genshin"+
"\n.nsfw Squirt"+
"\n.nsfw Glasses"+
"\n.nsfw Sunglasses"+
"\n.nsfw Swimsuit"+
"\n.nsfw School Swimsuit"+
"\n.nsfw Holo Live"+
"\n.nsfw Ass"+
"\n.nsfw Underwear"+
"\n.nsfw Nipples"+
"\n.nsfw Uncensored"+
"\n.nsfw Sex"+
"\n.nsfw Sex2"+
"\n.nsfw Sex3"+
"\n.nsfw Blonde"+
"\n.nsfw Twintails"+
"\n.nsfw Breasts"+
"\n.nsfw Thighhighs"+
"\n.nsfw Skirt"+
"\n.nsfw Gamecg"+
"\n.nsfw Animal Ears"+
"\n.nsfw Foxgirl"+
"\n.nsfw Dress"+
"\n.nsfw School Uniform"+
"\n.nsfw Twogirls"+
"\n.nsfw Gloves"+
"\n.nsfw Vocaloid"+
"\n.nsfw Touhou"+
"\n.nsfw Weapon"+
"\n.nsfw With Flowers"+
"\n.nsfw Pinkhair"+
"\n.nsfw Clouds View"+
"\n.nsfw White"+
"\n.nsfw Animal"+
"\n.nsfw Tail"+
"\n.nsfw Nude"+
"\n.nsfw Ponytail"+
"\n.nsfw Bed"+
"\n.nsfw White Hair"+
"\n.nsfw Ribbons"+
"\n.nsfw Japanese Cloths"+
"\n.nsfw Hatsune Miku"+
"\n.nsfw Bikini"+
"\n.nsfw Barefoot"+
"\n.nsfw Nobra"+
"\n.nsfw Food"+
"\n.nsfw Wings"+
"\n.nsfw Pantyhose"+
"\n.nsfw Open Shirt"+
"\n.nsfw Headband"+
"\n.nsfw Penis"+
"\n.nsfw Close"+
"\n.nsfw Wet"+
"\n.nsfw Catgirl"+
"\n.nsfw Wolfgirl"+
"\n.nsfw Neko"+
"\n.nsfw Loli"+
"\n.nsfw Spread Legs"+
"\n.nsfw Bra"+
"\n.nsfw Fate Series"+
"\n.nsfw Tree"+
"\n.nsfw Elbow Gloves"+
"\n.nsfw Green Hair"+
"\n.nsfw Horns"+
"\n.nsfw With Petals"+
"\n.nsfw Drunk"+
"\n.nsfw Cum"+
"\n.nsfw Head Dress"+
"\n.nsfw Tie"+
"\n.nsfw Shorts"+
"\n.nsfw Maid"+
"\n.nsfw Headphones"+
"\n.nsfw Anus View"+
"\n.nsfw Idol"+
"\n.nsfw Gun"+
"\n.nsfw Stockings"+
"\n.nsfw Tears"+
"\n.nsfw Breasthold"+
"\n.nsfw Necklace"+
"\n.nsfw Seethrough"+
"\n.nsfw Bunnyears"+
"\n.nsfw Bunnygirl"+
"\n.nsfw Topless"+
"\n.nsfw Beach"+
"\n.nsfw Erect Nipples"+
"\n.nsfw Yuri"+
"\n.nsfw Vampire"+
"\n.nsfw Shirt"+
"\n.nsfw Pantypull"+
"\n.nsfw Torn Clothes"+
"\n.nsfw Bondage"+
"\n.nsfw Demon"+
"\n.nsfw Bell"+
"\n.nsfw Shirt Lift"+
"\n.nsfw Tattoo"+
"\n.nsfw Chain"+
"\n.nsfw Flat Chest"+
"\n.nsfw Fingering")

        var asuna = require('./asuna');
        var getJSON = require('get-json')
        msg.react("⌛")

        switch (args[1]) {
            case "waifu":
            case "neko":
            case "trap":
            case "blowjob":
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
            break;
            case "ass":
            case "hentai":
            case "milf":
            case "oral":
            case "paizuri":
            case "ecchi":
            case "ero":
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
            default:
                getJSON('https://fantox-apis.vercel.app/' + value.replace(" ",""))
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
            break;
        }




        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}