/* AsunaBot
description: user information*/

var pluginName = "leaderboard"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    leaderboard: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        db.query(
            `SELECT *
            FROM Users
            ORDER BY xp DESC`
            , function (error, results, fields) {
                if (error) console.log(error.message);
                leaderboard(JSON.parse(JSON.stringify(results)))
                async function leaderboard(res) {
                    var leaderboard = user.style + " Asuna Leaderboard\n";
                    var position = 0
                    for (const item of res.values()) {
                        position++
                        if (position == 1) {
                            leaderboard += "\n🥇 " + JSON.stringify(item.style) + " " + JSON.stringify(item.username) + " " + JSON.stringify(item.xp) + " xp"
                        } else if (position == 2) {
                            leaderboard += "\n🥈 " + JSON.stringify(item.style) + " " + JSON.stringify(item.username) + " " + JSON.stringify(item.xp) + " xp"
                        } else if (position == 3) {
                            leaderboard += "\n🥉 " + JSON.stringify(item.style) + " " + JSON.stringify(item.username) + " " + JSON.stringify(item.xp) + " xp\n"
                        } else {
                            leaderboard += "\n " + position + ". " + JSON.stringify(item.style) + " " + JSON.stringify(item.username) + " " + JSON.stringify(item.xp) + " xp"
                        }
                    }

                    msg.reply(leaderboard.replace(/["]+/g, ''));
                }
            });
        
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }, slotboard: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        db.query(
            `SELECT *
                FROM Users WHERE gartic_points > 0
                ORDER BY gartic_points DESC`
            , function (error, results, fields) {
                if (error) console.log(error.message);
                garticLeaderboard(JSON.parse(JSON.stringify(results)))
                async function garticLeaderboard(res) {
                    var leaderboard = user.style + " gartic leaderboard\n";
                    var position = 0
                    for (const item of res.values()) {
                        position++
                        leaderboard += "\n " + position + ". " + JSON.stringify(item.style) + " " + JSON.stringify(item.username) + " " + JSON.stringify(item.gartic_points) + " points"

                    }

                    msg.reply(leaderboard.replace(/["]+/g, ''));
                }
            });
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}