/* AsunaBot
description: welcome user*/

var pluginName = "bot"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    check: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        /*db.query(
            `SELECT trophy
            FROM Trophies
            WHERE user_id = `+user.user_id

            , function (error, results, fields) {
                if (error) console.log(error.message);
                trophies(results.toString())
                async function trophies(res) {

                    console.log(res)

                    var amount = 0;
                    var text;

                    if (!res.include("❄️")) {
                        amount++
                        text += "\n❄️x WinterSnowflake"
                    }
                    if (!res.include("⭐")) {
                        amount++
                        text += "\n⭐x StardashStar"
                    }  
                    if (!res.include("🪷")) {
                        amount++
                        text += "\n🪷x AsunaRose"
                    } 
                    if (!res.include("🐺") && (user.messages > 10000)) {
                        amount++
                        text += "\n🐺x 10kCommands"
                    } 
                    if (!res.include("🎄")) {
                        amount++
                        text += "\n🎄x Christmas22"
                    } 
                    if (!res.include("🐗") && (user.messages > 1000)) {
                        amount++
                        text += "\n🐗x 1kCommands"
                    } 
                    if (!res.include("🌺") && (user.slot_points > 10000)) {
                        amount++
                        text += "\n🌺x 10k SlotMaster"
                    } 
                    if (!res.include("🌸") && (user.gartic_points > 10000)) {
                        amount++
                        text += "\n🌸x 10k GarticMaster"
                    } 

                    msg.reply("You received "+amount+" :\n"+text+"\n\n_trophies added to your profile_");
                }
            });*/

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }, display: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        db.query(
            `SELECT *
            FROM Trophies
            WHERE user_id = `+user.user_id

            , function (error, results, fields) {
                if (error) console.log(error.message);
                trophies(JSON.parse(JSON.stringify(results)))
                async function trophies(res) {
                    
                    var t = "";
                    var position = 0
                    for (const item of res.values()) {
                        position++
                       
                        t += "\n" + JSON.stringify(item.trophy) + "x " + JSON.stringify(item.trophy_desc)
          
                    }

                    msg.reply(
                        
                        "You own "+position+" trophies.\n"
                        +t.replace(/["]+/g, ''));
                }
            });

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }

    /*

CREATE TABLE Trophies (
trophy_id INT NOT NULL AUTO_INCREMENT,
trophy varchar(255),
trophy_desc varchar(255),
user_id int,
timestamp int,
PRIMARY KEY ( trophy_id )
);

    */
}
