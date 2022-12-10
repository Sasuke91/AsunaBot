/* AsunaBot
description: send any song*/

var pluginName = "song"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    download: async function (msg, value, args, user)  {
        var Genius = require("genius-lyrics");
        var gis = require('g-i-s');
        var yt = require('youtube-search-without-api-key');

        var db = require('./db');
        var user = require('./user.js');
        var asuna = require('./asuna');
        var { exec } = require('child_process');
        
        if (args.length < 2) return msg.reply(`${user.style} > Asuna\n\nPlease enter the song name.`)
        if (msg.deviceType == "ios") {
            msg.reply(`${user.style} ios may not support this file.`)
        }

        msg.react("⌛")

        var getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
   
        gis("album cover " + value, logResults);
        async function logResults(error, results) {
            if (error) {
                console.log(error);
                msg.reply(`${user.style} _${videos[0].title}_\n💎 _${videos[0].duration_raw}_ min`)
            } else {
                var videos = await yt.search(`${value}`);

                try {
                    const mediaLink = await MessageMedia.fromUrl(link);
                    client.sendMessage(number, mediaLink, { caption: text }).then(function (res) { }).catch(function (err) { });
                    sendImgs(results[0].url, msg.from, `${user.style} _${videos[0].title}_\n💎 _${videos[0].duration_raw}_ min`).then(function () { });
                } catch (err) {
                    msg.reply(`${user.style} _${videos[0].title}_\n💎 _${videos[0].duration_raw}_ min`)
                }
            }
        }

        var Client = new Genius.Client("ss1xrr_91SIm28aKUQrBHenA9JB58zDM9A9jm2TMs7JpXCOFMOik1T32YHkoY1BV"); // Scrapes if no key is provided
        var searches = await Client.songs.search(`${value}`);

        // Pick first one
        var firstSong = searches[0];

        // Ok lets get the lyrics
        var lyrics = await firstSong.lyrics();

        msg.reply(`${user.style} > Asuna > Lyrics\n\n${lyrics}`)

        try {
            ran = getRandom('.mp3')
            exec(`yt-dlp -x --audio-format mp3 -o, --output ${ran} "ytsearch:${value}"`, (err) => {

                if (err) return reply(`${user.style} Error\n\n\n` + err.message)

                sendMediaAudio(ran, style + ' Heres your song').then(function () { });

                async function sendMediaAudio(path, text) {
                    try {

                        const Audio = await MessageMedia.fromFilePath(ran);
                        client.sendMessage(msg.from, Audio, { caption: value }).then(function (res) { msg.react("✅") }).catch(function (err) {
                            msg.reply(`${user.style} Error\n\n\n` + err.message)
                            msg.react("❌")
                        });

                    } catch (err) {
                        msg.reply(`${user.style} Error\n\n\n` + err.message)
                        msg.react("❌")
                    }
                }
            })

        } catch (err) {
            msg.reply(`${user.style} Error\n\n\n` + err.message)
            msg.react("❌")
        }
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}