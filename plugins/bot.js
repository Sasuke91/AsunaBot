/* AsunaBot
description: welcome user*/

var pluginName = "bot"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = (msg, value, args) => {

        var db = require('./db');
        var user = require('./user.js');
        var asuna = require('./asuna');

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)

        if (user != false) {
            msg.reply(user.style+" Hey "+user.usenrname)
        }
};