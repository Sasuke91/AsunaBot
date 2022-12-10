/* AsunaBot
plugin name: log
description: log information
author: Feuerherz
version 1.0*/

var pluginName = "log"
var pluginVersion = 1.0

module.exports = {
    log: function (pluginName, pluginVersion, pluginAuthor, isError, errorMessage) {

        console.log("using module "+pluginName+" version "+pluginVersion)

    },
    format: function (date, callback) {

        var finalTime;
        var time = (dateInSec - Number(date))
        const dateInSec = Math.floor(new Date().getTime() / 1000) // in seconds
    
        if (time / 60 / 60 / 24 > 364) {
            finalTime = time / 60 / 60 / 24 / 365 + ". year(s) ago"
        } else if (time / 60 / 60 / 24 > 30) {
            finalTime = time / 60 / 60 / 24 / 30 + ". month(s) ago"
        } else if (time / 60 / 60 / 24 > 1) {
            finalTime = time / 60 / 60 / 24 + ". day(s) ago"
        } else if (time / 60 / 60 > 1) {
            finalTime = time / 60 / 60 + ". hour(s) ago"
        } else if (time / 60 > 1) {
            finalTime = time / 60 + ". minute(s) ago"
        } else {
            finalTime = time + ".. second(s) ago"
        }
        var formated_time = finalTime.split(".")[0] + " " + finalTime.split(" ")[1] + " ago"

        return callback(formated_time);
    }
};