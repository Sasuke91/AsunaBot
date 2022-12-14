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
                "❄ "+user.username+" ❄"
                +"\n\n_"+user.bio+"_"
                +"\n\n"+user.coins+"$"
                +"\nxp: "+user.xp
                +"\nstyle: "+user.style
                +"\nos: "+user.deviceType
                +"\ncommands: "+user.messages
                +"\n+"+user.clearnumber
                +"\nstatus: "+user.status+" 
                +"\n[id "+user.user_id+"]"
                +"\ngartic: "+user.gartic_points
                +"\nslot: "+user.slot_points
                +"\n\n_⋆ star since "+date+"_"
            )
        });
        
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}