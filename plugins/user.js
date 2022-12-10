/* AsunaBot
plugin name: user
description: get user information
author: Feuerherz
version 1.0*/

var pluginName = "user"
var pluginVersion = 1.0

module.exports = {
    details: function (msg, callback) {

        var db = require('./db');
        var asuna = require('./asuna');

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
                    console.log(res[0])
            
                    return callback(res[0]);
            })
            }
        });
    },
    details_by_id_or_tag: function (msg, args, callback) {

        var db = require('./db');
        var asuna = require('./asuna');

        var number;
        if (msg.author == "undefined") {
            number = msg.from
        } else if (msg.author == undefined) {
            number = msg.from
        } else {
            number = msg.author
        }

        var search;
        if (args[0].includes("@")) {
            search = `number="${value.split("@")[1]}@c.us"`
        } else {
            search = `user_id=${args[1]}`
        }

        db.query(
        `SELECT COUNT(*) AS RowCount FROM Users WHERE `+search
        , function (error, results, fields) {
            if (error) asuna.log(pluginName, pluginVersion, pluginAuthor, true, error.message);
          
            if (Number(results[0].RowCount) < 1) {

                msg.reply("the user ís not registered")

                return callback(false);

            } else {

                db.query( // get the users stuff

                `SELECT * FROM Users
                WHERE `+search
    
                , function (error, results, fields) {
                    if (error) asuna.log(pluginName, pluginVersion, pluginAuthor, true, error.message);
    
                    var res = JSON.parse(JSON.stringify(results))
                    console.log(res[0])
            
                    return callback(res[0]);
            })
            }
        });
    }
};