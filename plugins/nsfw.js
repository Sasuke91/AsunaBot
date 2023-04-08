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
"\n.Pussy"+
"\n.Spreadpussy"+
"\n.Genshin"+
"\n.Squirt"+
"\n.Glasses"+
"\n.Sunglasses"+
"\n.Swimsuit"+
"\n.School Swimsuit"+
"\n.Holo Live"+
"\n.Ass"+
"\n.Underwear"+
"\n.Nipples"+
"\n.Uncensored"+
"\n.Sex"+
"\n.Sex2"+
"\n.Sex3"+
"\n.Blonde"+
"\n.Twintails"+
"\n.Breasts"+
"\n.Thighhighs"+
"\n.Skirt"+
"\n.Gamecg"+
"\n.Animal Ears"+
"\n.Foxgirl"+
"\n.Dress"+
"\n.School Uniform"+
"\n.Twogirls"+
"\n.Gloves"+
"\n.Vocaloid"+
"\n.Touhou"+
"\n.Weapon"+
"\n.With Flowers"+
"\n.Pinkhair"+
"\n.Clouds View"+
"\n.White"+
"\n.Animal"+
"\n.Tail"+
"\n.Nude"+
"\n.Ponytail"+
"\n.Bed"+
"\n.White Hair"+
"\n.Ribbons"+
"\n.Japanese Cloths"+
"\n.Hatsune Miku"+
"\n.Bikini"+
"\n.Barefoot"+
"\n.Nobra"+
"\n.Food"+
"\n.Wings"+
"\n.Pantyhose"+
"\n.Open Shirt"+
"\n.Headband"+
"\n.Penis"+
"\n.Close"+
"\n.Wet"+
"\n.Catgirl"+
"\n.Wolfgirl"+
"\n.Neko"+
"\n.Loli"+
"\n.Spread Legs"+
"\n.Bra"+
"\n.Fate Series"+
"\n.Tree"+
"\n.Elbow Gloves"+
"\n.Green Hair"+
"\n.Horns"+
"\n.With Petals"+
"\n.Drunk"+
"\n.Cum"+
"\n.Head Dress"+
"\n.Tie"+
"\n.Shorts"+
"\n.Maid"+
"\n.Headphones"+
"\n.Anus View"+
"\n.Idol"+
"\n.Gun"+
"\n.Stockings"+
"\n.Tears"+
"\n.Breasthold"+
"\n.Necklace"+
"\n.Seethrough"+
"\n.Bunnyears"+
"\n.Bunnygirl"+
"\n.Topless"+
"\n.Beach"+
"\n.Erect Nipples"+
"\n.Yuri"+
"\n.Vampire"+
"\n.Shirt"+
"\n.Pantypull"+
"\n.Torn Clothes"+
"\n.Bondage"+
"\n.Demon"+
"\n.Bell"+
"\n.Shirt Lift"+
"\n.Tattoo"+
"\n.Chain"+
"\n.Flat Chest"+
"\n.Fingering")

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
                getJSON('https://fantox-apis.vercel.app/' + args[1])
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