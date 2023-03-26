/* AsunaBot */

var pluginName = "group"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

   kick: function (msg, value, args, user)  {
    if (user.status != "vip" && user.status != "owner") return msg.reply(user.style+" you need vip to use this command")
        kick()
        async function kick() {
            let chat = await msg.getChat()
            let users = msg.mentionedIds[0] ? msg.mentionedIds : msg.hasQuotedMsg ? [quoted.from] : [text.replace(/[^0-9]/g, '') + "@c.us"]
            for (let user_ of users) chat.removeParticipants([user_]).then((res) => {
                msg.react("✅")
            }).catch((err) => {
                if (err) {
                    msg.reply("i need admin to do this")
                    msg.react("❌")
                }
            })

        
        }
    }, tagall: function (msg, value, args, user)  {
        if (user.status != "vip" && user.status != "owner") return msg.reply(user.style+" you need vip to use this command")
        tagall()
        async function tagall() {
            const chat = await msg.getChat();

            let text = " ";
            let mentions = [];
            var position = 0
            for (let participant of chat.participants) {
                const contact = await client.getContactById(participant.id._serialized);
                position++
                mentions.push(contact);
                text += `\n - @${participant.id.user} `;
            }

            await client.sendMessage(msg.from, "total: " + position + text, { mentions });

        }
    }, group: function (msg, value, args, user)  {
        
        msg.reply(user.style+" Asuna support\n\n"+
        "https://chat.whatsapp.com/I09F6RruESk0XimB12YlDF"
        )
    }, vip: function (msg, value, args, user)  {
        if (user.status != "owner") return msg.reply(user.style+" this command is only for the owner")
      
        var db = require('./db');
        db.query(
            `UPDATE Users
SET status = "vip"
WHERE user_id=${args[1]}`
            , function (error, results, fields) {
                if (error) reply(error.message);
            });
        msg.reply(style + " the user with the id " + args[1] + " has been promoted to VIP!")
        msg.react("✅")

    }, removevip: function (msg, value, args, user)  {
        if (user.status != "owner") return msg.reply(user.style+" this command is only for the owner")
      

        var db = require('./db');
        db.query(
            `UPDATE Users
SET status = "normal"
WHERE user_id=${args[1]}`
            , function (error, results, fields) {
                if (error) reply(error.message);
            });
   
        msg.reply(user.style + " the user with the id " + args[1] + " has been demoted!")
    }
}