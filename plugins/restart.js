/* AsunaBot
description: menu information*/

var pluginName = "menu"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    clear: function () {

        var db = require('./db');
        var asuna = require('./asuna');

        db.query(
            `DELETE FROM Slot`
            , function (error, results, fields) {
                if (error) {
                    console.log("there was error deleting the session\n\n" + error.message);
                } else {
                    console.log("CLEARED SLOT SESSIONS");
                }
            });

        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}
