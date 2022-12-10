/* AsunaBot
description: register user information*/

var pluginName = "register"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    insert: async function (msg, value, args, user, client)  {

        var db = require('./db');
        var user = require('./user.js');
        var asuna = require('./asuna');
        var dateInSec = Math.floor(new Date().getTime() / 1000) // in seconds

        var number;
        if (msg.author == "undefined") {
            number = msg.from
        } else if (msg.author == undefined) {
            number = msg.from
        } else {
            number = msg.author
        }

        const code = await client.getCountryCode(number)
        var pushname = msg._data.notifyName

        db.query( // register userstuff
            `INSERT INTO Users (username, number, date, coins, xp, style, age, bio, messages, deviceType, clearnumber, country_code) 
            VALUES ("${pushname}","${number}","${dateInSec}",100,0,"⛓️",0,"hey its me", 0, "${msg.deviceType}","${number.split("@")[0]}","${code}")`
            , function (error, results, fields) {
                if (error) return msg.reply("The registration failed. Please contact Asuna Owner.\n\n" + error.message);
                msg.reply("<> Asuna Registration successfull " + pushname + "\n\nView commands: .menu\nView your profile: .me")
                msg.react("✅")
        });

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}