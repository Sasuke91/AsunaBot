/* AsunaBot
description: get tf2 info*/

var pluginName = "tf2"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

var key = "80641ADF64F272B95997D9A6A99AB604"

module.exports = {

    download: async function (msg, value, args, user, client, MessageMedia)  {
        var getJSON = require('get-json')

            getJSON('https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?key='+key+'&appid=440', function (error, res) {
                // console.log(res);
                msg.reply("current playing team fortress 2 players\n\n"+res.response.player_count)

            });


        // asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}