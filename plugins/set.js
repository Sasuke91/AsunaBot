/* AsunaBot
plugin name: user
description: get user information
author: Feuerherz
version 1.0*/

module.exports = {
    info: function (msg, target, replacement, callback) {

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

        console.log(number)

        db.query( // update
            `UPDATE Users
            SET ${target} = "${replacement}"
            WHERE number='${number}'`
        , function (error, results, fields) {
            if (error) {
                console.log(error.message);
                return callback(false);
            }
            return callback(true);
        })
    }
};