/* AsunaBot
description: various tools*/

var pluginName = "tools"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    calc: function (msg, value, args, user)  {
        var db = require('./db');
        var asuna = require('./asuna');

        if (args.length < 1) return msg.reply(`${user.style} ⌯   ﹝Enter Calculation. Example:   .calc 5 + 9     or  .calc 6 / 2      or   .calc   5 * 5     or   .calc   10 - 5﹞`)
                        
        let x = Number(args[0]);
        let y = Number(args[2]);
        
            if (args[1] === '+' ) {
                let z = x + y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[1]+'﹝'+ y +'﹞is﹝'+ z +'﹞'); 
        } else if (args[1] === '*' ) {
                let z = x * y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[1]+'﹝'+ y +'﹞is﹝'+ z +'﹞');
        } else if (args[1] === 'x' ) {
                let z = x * y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[1]+'﹝'+ y +'﹞is﹝'+ z +'﹞');
        } else if (args[1] === '/' ) {
                let z = x / y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[1]+'﹝'+ y +'﹞is﹝'+ z +'﹞');	
        } else if (args[1] === ':' ) {
                let z = x / y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[1]+'﹝'+ y +'﹞is﹝'+ z +'﹞');	
        } 
        else if (args[1] === '-' ) {
                let z = x - y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[1]+'﹝'+ y +'﹞is﹝'+ z +'﹞');	
        } 

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}
