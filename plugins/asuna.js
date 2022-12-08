/* AsunaBot
plugin name: log
description: log information
author: Feuerherz
version 1.0*/

var pluginName = "log"
var pluginVersion = 1.0

module.exports = {
    log: function (pluginName, pluginVersion, pluginAuthor, isError, errorMessage) {

        var db = require('./db');
        var log = require('./log');
        
        console.log("using module "+pluginName+" version "+pluginVersion)

    }
};