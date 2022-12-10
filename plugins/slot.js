/* AsunaBot
description: slot*/

var pluginName = "slot"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    reply: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        if (user.coins < 5) return msg.reply(`${user.style} You dont have enough money`)

        var _slot = ["🍒",
        "💎",
        "🍉",
        "🪙",
        "🍊",
        "❤",
        "🍋",
        "🍎",
        "🍀",
        "🍇",
        "🔔"]
        
        const slot1 = _slot[Math.floor(Math.random() * _slot.length)]
        const slot2 = _slot[Math.floor(Math.random() * _slot.length)]
        const slot3 = _slot[Math.floor(Math.random() * _slot.length)]
        const slot4 = _slot[Math.floor(Math.random() * _slot.length)]
        const slot5 = _slot[Math.floor(Math.random() * _slot.length)]
        const slot6 = _slot[Math.floor(Math.random() * _slot.length)]
        const slot7 = _slot[Math.floor(Math.random() * _slot.length)]
        const slot8 = _slot[Math.floor(Math.random() * _slot.length)]
        const slot9 = _slot[Math.floor(Math.random() * _slot.length)]

        var number;
        if (msg.author == "undefined") {
            number = msg.from
        } else if (msg.author == undefined) {
            number = msg.from
        } else {
            number = msg.author
        }

        // Save session to protect against spam
        db.query(
            `SELECT COUNT(*) AS RowCount FROM Slot WHERE number='${number}'`
            , function (error, results, fields) {
                console.log(results[0].RowCount)
                var amount = results[0].RowCount
                if (amount > 0) {

                } else {
                    db.query( // save message 
                    `INSERT INTO Slot (number) VALUES ("${number}")`
                    , function (error, results, fields) {
                        if (error) {
                            console.log(error.message)
                        }
                    });

                    var winmsg;
                    var winAmount;
                    var looseorwin
                    var status = "won";

                    if ((slot1 == slot2) && slot2 == slot3) {

                        winmsg = "jackpot"
                        winAmount = 100
                        status = "jackpot"

                        db.query(
                            `UPDATE Users SET slot_points = slot_points + 5 WHERE number='${number}'`
                            , function (error, results, fields) {
                                if (error) {
                                    console.log(error.message);
                                }
                        });

                    } else if (slot1 == slot2) {
                        winmsg = "small win"
                        winAmount = 13
                        db.query(
                            `UPDATE Users SET slot_points = slot_points + 1 WHERE number='${number}'`
                            , function (error, results, fields) {
                                if (error) {
                                    console.log(error.message);
                                }
                        });
                    } else if (slot2 == slot3) {
                        winmsg = "small win"
                        winAmount = 13
                        db.query(
                            `UPDATE Users SET slot_points = slot_points + 1 WHERE number='${number}'`
                            , function (error, results, fields) {
                                if (error) {
                                    console.log(error.message);
                                }
                            });
                    } else if (slot1 == slot3) {
                        winmsg = "small win"
                        winAmount = 13
                        db.query(
                            `UPDATE Users SET slot_points = slot_points + 1 WHERE number='${number}'`
                            , function (error, results, fields) {
                                if (error) {
                                    console.log(error.message);                              }
                            });
                    } else {
                        winmsg = "you lost"
                        winAmount = -5
                        status = "lost"
                    }

                    if (winAmount < 0) {
                        looseorwin = "lost"
                    } else {
                        looseorwin = "won"
                    }

                    db.query(
                        `UPDATE Users SET coins = "${user.coins + winAmount}", xp = xp + 2 WHERE number='${number}'`
                        , function (error, results, fields) {
                            if (error) console.log(error.message);
                    });

                    var delay = ms => new Promise(resolve => setTimeout(resolve, ms))

                    // Usage:
                    codeSlot()
                    async function codeSlot() {
                        await delay(1000);
msg.reply(user.style + ` 𝚂𝚕𝚘𝚝s

${slot4}${slot5}${slot6}
- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ ${winmsg} ♕︎
- - - - - - - - - \n${slot7}${slot8}${slot9}

you ${looseorwin} ${winAmount}$!
you have $${coins + winAmount} left!`) 

                        db.query(
                            `DELETE FROM Slot WHERE number="${number}"`
                            , function (error, results, fields) {
                                if (error) msg.reply("there was error deleting the session\n\n" + error.message);
                        });

                    }


                }
            });
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}