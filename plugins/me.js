/* AsunaBot
description: user information*/

var pluginName = "me"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    reply: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        asuna.format(user.date, function(date){
            // returns formated date
            msg.reply(
                user.style+" "+user.username
                +"\n\n_"+user.bio+"_"
                +"\n\n⋆ "+user.coins+"$"
                +"\n⋆ xp: "+user.xp
                +"\n⋆ style: "+user.style
                +"\n⋆ os: "+user.deviceType
                +"\n⋆ commands: "+user.messages
                +"\n⋆ +"+user.clearnumber
                +"\n⋆ status: "+user.status 
                +"\n⋆ [id "+user.user_id+"]"
                +"\n⋆ gartic: "+user.gartic_points
                +"\n⋆ slot: "+user.slot_points
                +"\n\n_⋆ star since "+date+"_"
            )
        });
        
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}
