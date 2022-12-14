/* AsunaBot
description: various tools*/

var pluginName = "tools"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    calc: function (msg, value, args, user)  {
        var db = require('./db');
        var asuna = require('./asuna');

        if (args.length < 2) return msg.reply(`${user.style} ⌯   ﹝Enter Calculation. Example:   .calc 5 + 9     or  .calc 6 / 2      or   .calc   5 * 5     or   .calc   10 - 5﹞`)
                        
        let x = Number(args[1]);
        let y = Number(args[3]);
        
            if (args[2] === '+' ) {
                let z = x + y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[2]+'﹝'+ y +'﹞is﹝'+ z +'﹞'); 
        } else if (args[2] === '*' ) {
                let z = x * y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[2]+'﹝'+ y +'﹞is﹝'+ z +'﹞');
        } else if (args[2] === 'x' ) {
                let z = x * y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[2]+'﹝'+ y +'﹞is﹝'+ z +'﹞');
        } else if (args[2] === '/' ) {
                let z = x / y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[2]+'﹝'+ y +'﹞is﹝'+ z +'﹞');	
        } else if (args[2] === ':' ) {
                let z = x / y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[2]+'﹝'+ y +'﹞is﹝'+ z +'﹞');	
        } 
        else if (args[2] === '-' ) {
                let z = x - y;
                msg.reply('⌯   The result of﹝'+ x +'﹞'+args[2]+'﹝'+ y +'﹞is﹝'+ z +'﹞');	
        } 

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }, gender: function (msg, value, args, user)  {
        var db = require('./db');
        var asuna = require('./asuna');

        if (args.length < 2) return msg.reply(`${user.style} What name shall i test?\n- - - - - - - - - - - - - - - - - -\nexample .gender John`)

        var getJSON = require('get-json')
        
        getJSON(`https://api.genderize.io/?name=${args[1]}`, function (error, res) {
            console.log(res);

            msg.reply(`- - - - - - - - - - - - - - - - - -
👻 𝐺𝑒𝑛𝑑𝑒𝑟 ⌖ _${res.gender}_
- - - - - - - - - - - - - - - - - -
🧾 𝐴𝑐𝑐𝑢𝑟𝑎𝑐𝑦 ⌖ _${res.probability}_
- - - - - - - - - - - - - - - - - -
`)
        });

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}
