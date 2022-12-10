/* AsunaBot
description: a game called gartic*/

var pluginName = "Gartic"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    reply: function (msg, value, args, user, client, MessageMedia)  {

        var db = require('./db');
        var asuna = require('./asuna');
        var gis = require('g-i-s');
        
        if (!msg._data.id.remote.includes("@g.us")) return msg.reply (user.style+" this game only works in groups.")
        
        var group = msg._data.id.remote
        if (group.includes("-")) {
            group = msg._data.id.remote.split("-")[1]
        }

        msg.react("⌛")

        db.query(
            `DELETE FROM Gartic WHERE group_id="${group}"`
            , function (error, results, fields) {
                if (error) msg.reply("there was error deleting the session\n\n" + error.message);

            db.query(
                `SELECT * FROM Words order by rand() limit 1`
                , function (error, results, fields) {
                    if (error) msg.reply("there was error getting word\n\n" + error.message);

                    var res = JSON.parse(JSON.stringify(results))
                    var randomElement = res[0].word

                    gis(randomElement, logResultsSend);

                    async function logResultsSend(error, results) {
                        if (error) {
                            console.log(error);
                            msg.reply(`error uwu`)
                        } else {

                            var group = msg._data.id.remote

                            if (group.includes("-")) {
                                group = msg._data.id.remote.split("-")[1]
                            }

                            db.query( // save message
                                `INSERT INTO Gartic (word, group_id, winner_id, word_id, category) VALUES ("${randomElement.toLowerCase()}","${group}","none",${res[0].word_id},"${category}")`
                                , function (error, results, fields) {
                                    if (error) {
                                        console.log(error.message)
                                        msg.reply(`error uwu\n\n` + error.message)
                                    }
                            });

                            console.log(JSON.stringify(results, null, '  '));

                            async function sendImgs(link, number, text) {
                                const mediaLink = await MessageMedia.fromUrl(link, { unsafeMime: true });
                                client.sendMessage(number, mediaLink, { caption: text }).then(function (res) { }).catch(function (err) { });
                            }
                            sendImgs(results[0].url, msg.from, `${user.style} < Asuna > Guess the word.\n\nTo submit it enter .guess < word >`).then(function () { });
                            msg.react("✅")
                        }
                    }
                });
            });
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)

    }, guess: function (msg, value, args, user, client, MessageMedia)  {

    if (!msg._data.id.remote.includes("@g.us")) return msg.reply (user.style+" this game only works in groups.")
    
    var group = msg._data.id.remote
    if (group.includes("-")) {
        group = msg._data.id.remote.split("-")[1]
    }

    if (args.length < 2) return msg.reply(`${user.style} Please enter guess.\n\nExample: .guess horse`)
    if (args.length > 2) return msg.reply(`${user.style} Please enter only 1 word.\n\nExample: .guess horse`)

    db.query(
        `SELECT * FROM Gartic WHERE group_id="${group}"`
        , function (error, sessionRes, fields) {
            if (error) {
                console.log(error.message);
            } else {
                var sessionResults = JSON.parse(JSON.stringify(sessionRes))

                db.query(
                    `SELECT COUNT(*) AS RowCount FROM Gartic WHERE group_id="${group}"`
                    , function (error, results, fields) {
                        if (Number(results[0].RowCount) < 1) {
                           msg.reply(user.style + " there is no active game in this group!\nTo start a game type: .gartic")
                        } else {
                            db.query(
                                `SELECT COUNT(*) AS RowCount FROM Gartic WHERE group_id="${group}" AND word="${args[1].toLowerCase()}"`
                                , function (error, results, fields) {
                                    if (Number(results[0].RowCount) < 1) {
                                        msg.react("❌")
                                        db.query(
                                            `UPDATE Words SET lost = lost + 1, usages = usages + 1 WHERE word_id=${sessionResults[0].word_id}`
                                            , function (error, results, fields) {
                                                if (error) {
                                                    console.log(error.message);
                                                }
                                            });
                                    } else {
                                        db.query(
                                            `UPDATE Words SET wins = wins + 1, usages = usages + 1 WHERE word_id=${sessionResults[0].word_id}`
                                            , function (error, results, fields) {
                                                if (error) {
                                                    console.log(error.message);
                                                }
                                            });
                                        db.query(
                                            `SELECT * FROM Words WHERE word_id=${sessionResults[0].word_id}`
                                            , function (error, sessionResOutcome, fields) {
                                                if (error) {
                                                    console.log(error.message);
                                                   msg.reply(error.message + "  1")
                                                } else {
                                                    var sessionResultsOutcome = JSON.parse(JSON.stringify(sessionResOutcome))
                                                    db.query(
                                                        `SELECT * FROM Users WHERE user_id=${sessionResultsOutcome[0].creator_id}`
                                                        , function (error, sessionUser, fields) {
                                                            if (error) {
                                                                console.log(error.message);
                                                               msg.reply(error.message + "  2")
                                                            } else {
                                                                var userInfo = JSON.parse(JSON.stringify(sessionUser))
                                                               msg.reply(user.style + " this is the correct word!\n\nYou won 1 point, 10$ and 5xp!\n\nThe word came up " +
                                                                    sessionResultsOutcome[0].usages + " times, guessed correctly " +
                                                                    sessionResultsOutcome[0].wins + " times and failed " + sessionResultsOutcome[0].lost +
                                                                    " times\n\nThe word was uploaded by " + userInfo[0].username + " and because you won, he will get 1$!\n\n< AsunaGartic >\n\n.gartic for a new game\n.garticboard for the leaderboard\n.tipp for a tip\n.guess < name > to guess a word\n.addlist <word1> <word2> to add words!")
                                                                msg.react("✅")

                                                                db.query(
                                                                    `UPDATE Users SET coins = coins + 1, xp = xp + 1 WHERE user_id=${userInfo[0].user_id}`
                                                                    , function (error, results, fields) {
                                                                        if (error) {
                                                                            console.log(error.message);
                                                                           msg.reply(error.message + "  3")
                                                                        }
                                                                    });

                                                            }
                                                        });
                                                }
                                            });

                                        db.query(
                                            `UPDATE Users SET coins = coins + 10, xp = xp + 5, gartic_points = gartic_points + 1 WHERE number='${number}'`
                                            , function (error, results, fields) {
                                                if (error) {
                                                    console.log(error.message);
                                                   msg.reply("there was error giving you the wins. please contact dev\n\n" + error.message);
                                                }
                                            });

                                            db.query(
                                                `SELECT * FROM Gartic WHERE group_id="${group}"`
                                                , function (error, resultss, fields) {

                                                    var ress = JSON.parse(JSON.stringify(resultss))

                                        db.query(
                                            `DELETE FROM Gartic WHERE group_id="${group}"`
                                            , function (error, results, fields) {
                                                if (error)msg.reply("there was error deleting the session\n\n" + error.message);

                                                db.query(
                                                    `SELECT * FROM Words order by rand() limit 1`
                                                    , function (error, results, fields) {
                                                        if (error)msg.reply("there was error getting word\n\n" + error.message);

                                                        var gis = require('g-i-s');

                                                        var res = JSON.parse(JSON.stringify(results))

                                                        var randomElement = res[0].word


                                                        gis(randomElement, logResultsSend);

                                                        async function logResultsSend(error, results) {
                                                            if (error) {
                                                                console.log(error);

                                                               msg.reply(`error uwu`)
                                                            }
                                                            else {

                                                                var group = msg._data.id.remote
                                                                if (group.includes("-")) {
                                                                    group = msg._data.id.remote.split("-")[1]
                                                                }

                                                                db.query( // save message
                                                                    `INSERT INTO Gartic (word, group_id, winner_id, word_id, category) 
                        VALUES ("${randomElement.toLowerCase()}","${group}","none",${res[0].word_id}, "${ress[0].category}")`
                                                                    , function (error, results, fields) {
                                                                        if (error) {
                                                                            console.log(error.message)
                                                                           msg.reply(`error uwu\n\n` + error.message)
                                                                        }
                                                                    });

                                                                console.log(JSON.stringify(results, null, '  '));
                                                                async function sendImgs(link, number, text) {
                                                                    const mediaLink = await MessageMedia.fromUrl(link, { unsafeMime: true });
                                                                    client.sendMessage(number, mediaLink, { caption: text }).then(function (res) { }).catch(function (err) { });
                                                                }
                                                                sendImgs(results[0].url, msg.from, `${user.style} guess the word!\n\nto submit type: .guess`).then(function () { });

                                                 
                                                            }
                                                        }
                                                    });

                                            });

                                        });
                                    }

                                });
                        }
                    });
            }
        })
    }, tipp: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        if (5 > Number(user.coins)) return msg.reply(user.style + " you dont have enough money to buy a tip. Your balence: " + user.coins + "$")

        if (!msg._data.id.remote.includes("@g.us")) return msg.reply (user.style+" this game only works in groups.")
    
        var group = msg._data.id.remote
        if (group.includes("-")) {
            group = msg._data.id.remote.split("-")[1]
        }

        connection.query( // get the users stuff
            `SELECT COUNT(*) AS RowCount FROM Gartic WHERE group_id="${group}"`
            , function (error, results, fields) {
                if (Number(results[0].RowCount) < 1) {
                    msg.reply(user.style + " there is no active game in this group!\n\nTo start a game type: .gartic")
                } else {

                    db.query(
                        `UPDATE Users
                    SET coins = coins - 5
                    WHERE number='${number}'`
                        , function (error, results, fields) {
                            if (error) {
                                console.log(error.message);
                                msg.reply("there was error. please contact dev with the error message (1)\n\n" + error.message);
                            } else {
                                db.query( // get the users stuff
                                    `SELECT * FROM Gartic
                            WHERE group_id="${group}"`
                                    , function (error, results, fields) {
                                        if (error) {
                                            console.log(error.message);
                                            msg.reply(user.style+" there was error. please contact dev with the error message (2)\n\n" + error.message);
                                        } else {
                                            var res = JSON.parse(JSON.stringify(results))
                                            var word = res[0].word
                                            msg.reply(user.style + ` heres a tip! the word starts with the letter: "${word.split("")[0]}" and the word is ${word.length} digits long!`);

                                            msg.react("✅")
                                        }
                                    })
                            }

                        });

                }
            });

        
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }, addlist: function (msg, value, args, user)  {

        if (!msg._data.id.remote.includes("@g.us")) return msg.reply (user.style+" this game only works in groups.")
    
        var group = msg._data.id.remote
        if (group.includes("-")) {
            group = msg._data.id.remote.split("-")[1]
        }

        if (args.length < 2) return reply(`${user.style} Please add a list. Example:\n\n.addlist horse house fox minecraft`)

        var category = "any"
        if (args[1] == "country") {
            category = "country"
        }
        var wordsArray = value.toLowerCase().split(" ")
        var wordsNotAllowed = 0
        var wordsAmount = 0
        var arrayLenght = wordsArray.length

        wordsArray.forEach(word => {
            console.log(word);
            wordsAmount++
            var newword;
            if (word.includes(" ")) {
                newword = word.replace(" ", "")
            } else {
                newword = word
            }
            if (newword.includes(",") || newword.includes(" ") || newword.length < 4 || newword.length > 10 || newword == "addlist") {
                console.log("word not suitable");
                wordsNotAllowed++
            } else {

                connection.query(
                    `SELECT COUNT(*) AS RowCount FROM Words WHERE word='${newword}'`
                    , function (error, results, fields) {
                        console.log(results[0].RowCount)
                        var amount = results[0].RowCount
                        if (amount > 0) {

                        } else {
                            connection.query( // save message
                                `INSERT into Words (word, creator_id, category) 
                            VALUES ("${newword}","${id}", "${category}")`
                                , function (error, results, fields) {
                                    if (error) {
                                        console.log(error.message)

                                    } else {

                                    }
                                });
                        }
                    });


            }

            if (arrayLenght == wordsAmount) {
                msg.reply(user.style + " proccessing...\n\n" + wordsAmount + " tried to add\n" + wordsNotAllowed + " were not allowed\n\nto remove a word again type .removeword")
                msg.react("✅")
            }
        });

    }, removeword: function (msg, value, args, user)  {

            if (!msg._data.id.remote.includes("@g.us")) return msg.reply (user.style+" this game only works in groups.")
        
            var group = msg._data.id.remote
            if (group.includes("-")) {
                group = msg._data.id.remote.split("-")[1]
            }
    
            if (args.length < 2) return reply(`${user.style} Add word to remove.`)
    
            db.query(
                `DELETE FROM Words WHERE word="${args[1].toLowerCase()}"`
                , function (error, results, fields) {
                    if (error) msg.reply("there was error\n\n" + error.message);
                    msg.reply("word removed ❎")
            });
    
        }
}