// AsunaBot

const { Client, LocalAuth, Location, List, Buttons, MessageMedia, NoAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

process.on('uncaughtException', err => {
    console.error(err && err.stack)
});

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" })
});
//  puppeteer: { executablePath: '/usr/bin/google-chrome-stable', headless: false, 	args: ['--no-sandbox'], }

client.on('qr', (qr) => {
    // NOTE: This event will not be fired if a session is specified.
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true });
});


client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});


client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('group_join', (notification) => {

});

// Modules
var user = require('./user.js');

client.on('message', async msg => {

    var value = removeFirstWord(msg.body)

    var args = msg.body.split(" ")

    var isCommand = false;
    try {
        if (msg.body.split("")[0] == ".") {
            isCommand = true
        }
    } catch (err) {

    }

    var switchMsg;
    if (msg.body.split("")[1] == " ") {
        var sub = removeFirstWord(msg.body.slice(2))
        var args = sub.split(" ")
        switchMsg = msg.body.slice(2).split(" ")[0]
    } else {
        switchMsg = msg.body.slice(1).split(" ")[0]
    }
    console.log(switchMsg)

    user.details(msg, function(user){
        // returns false or user
        if (user != false) {

            if (isCommand) {
                switch (switchMsg.toLowerCase()) {
                    case "bot":
                        var bot = require('./plugins/bot');
                        bot.reply(msg, value, args, user);
                    break;
                    case "me":
                        var me = require('./plugins/me.js');
                        me.reply(msg, value, args, user);
                    break;
                    case "user":
                        var me = require('./plugins/userinfo.js');
                        me.reply(msg, value, args, user);
                    break;
                }
            }

        }
    });
});

process.on("SIGINT", async () => {
    console.log("(SIGINT) Shutting down...");
    await client.destroy();
    process.exit(0);
})

client.initialize();

function removeFirstWord(str) {
    const indexOfSpace = str.indexOf(' ');

    if (indexOfSpace === -1) {
        return '';
    }

    return str.substring(indexOfSpace + 1);
}