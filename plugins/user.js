/* AsunaBot
plugin name: user
description: get user information
author: Feuerherz
version 1.0*/

var pluginName = "user"
var pluginVersion = 1.0

module.exports = {
    identify: function (msg) {

        var db = require('./db');


        var number;
        if (msg.author == "undefined") {
            number = msg.from
        } else if (msg.author == undefined) {
            number = msg.from
        } else {
            number = msg.author
        }

        db.query(
        `SELECT COUNT(*) AS RowCount FROM Users WHERE number='${number}'`
        , function (error, results, fields) {
            if (error) asuna.log(pluginName, pluginVersion, pluginAuthor, true, error.message);

            if (Number(results[0].RowCount) < 1) {

                msg.reply("please register to continue")

                return callback(false);

            } else {

                db.query( // get the users stuff

                `SELECT * FROM Users
                WHERE number="${number}"`
    
                , function (error, results, fields) {
                    if (error) asuna.log(pluginName, pluginVersion, pluginAuthor, true, error.message);
    
                    var res = JSON.parse(JSON.stringify(results))
            
                    return callback(res[0]);
            })
            }
        });
    }
};