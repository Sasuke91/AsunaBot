// AsunaBot

const { Client, LocalAuth, Location, List, Buttons, MessageMedia, NoAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

process.on('uncaughtException', err => {
    console.error(err && err.stack)
});

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { executablePath: '/usr/bin/google-chrome-stable', headless: true }
});

client.on('qr', (qr) => {
    // NOTE: This event will not be fired if a session is specified.
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr)
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

client.on('message', async msg => {
    var value = msg;
    var args = value.split(" ");

    switch (args[0]) {
        case "bot":
            require('./plugins/bot', (msg, value, args));
        break;
    }
});

client.initialize();