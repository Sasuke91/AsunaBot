/* AsunaBot
description: user information*/

var pluginName = "me"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    reply: function (msg, value, args)  {

        var db = require('./db');
        var user = require('./user.js');
        var asuna = require('./asuna');

        if (args.length < 1) {

            user.details(msg, function(user){
                // returns false or user
                if (user != false) {
                asuna.format(user.date, function(date){
                    // returns formated date
                    msg.reply(
                        "> "+user.username+" <"
                        +"\n\n_"+user.bio+"_"
                        +"\n\n> "+user.coins+"$ > "+user.xp+"☆"
                        +"\n> "+user.style+" > "+user.deviceType
                        +"\n> "+user.messages+" commands"
                        +"\n> "+user.clearnumber
                        +"\n> "+user.status+" [id "+user.user_id+"]"
                        +"\n> "+user.gartic+" > "+user.gartic_points
                        +"\n> "+user.slot+" > "+user.slot_points
                        +"\n\n_star since "+date+"_"
                    )
                });
            }
            });

        } else {

            user.details_by_id_or_tag(msg, args, function(user){
                // returns false or user
                if (user != false) {
                    asuna.format(user.date, function(date){
                        // returns formated date
                        msg.reply(
                            "> "+user.username+" <"
                            +"\n\n_"+user.bio+"_"
                            +"\n\n> "+user.coins+"$ > "+user.xp+"☆"
                            +"\n> "+user.style+" > "+user.deviceType
                            +"\n> "+user.messages+" commands"
                            +"\n> "+user.clearnumber
                            +"\n> "+user.status+" [id "+user.user_id+"]"
                            +"\n> "+user.gartic+" > "+user.gartic_points
                            +"\n> "+user.slot+" > "+user.slot_points
                            +"\n\n_star since "+date+"_"
                        )
                    });
                }
            });

        }

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}