/* AsunaBot
description: translate*/

var pluginName = "translate"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    reply: function (msg, value, args, user)  {

        var db = require('./db');
        var asuna = require('./asuna');

        var translate = require('translate-google')
        if (msg.hasQuotedMsg == true || msg.hasQuotedMsg == "true") {

            tl()

            async function tl() {
                var quotedMsg = await msg.getQuotedMessage();
                if (args.length > 1) {
                    translate(`${quotedMsg.body}`, { to: `${args[1]}` }).then(res => {
                        console.log(res)
                        msg.reply(`${user.style} 𝑇𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑖𝑜𝑛
- - - - - - - - - - - - - - - - - -		
${res}`)
                    }).catch(err => {

                        translate(`${quotedMsg.body}`, { to: `en` }).then(res => {
                            console.log(res)
                            msg.reply(`${user.style} 𝑇𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑖𝑜𝑛
- - - - - - - - - - - - - - - - - -		
${res}`)

                        })
                    })
                } else {
                    translate(`${quotedMsg.body}`, { to: `en` }).then(res => {
                        console.log(res)
                        msg.reply(`${user.style} 𝑇𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑖𝑜𝑛
- - - - - - - - - - - - - - - - - -		
${res}`)

                    })
                }




            }
        } else {

            if (args.length < 2) return msg.reply(`${user.style} What to translate? Pls gimme some text.. if u want to translate to africaan do .tl af to german .tl de and to english witout any text. You can find more languages on google language codes. You can also qoute text\nAll codes:
            
Name	Code
Amharic	am
Arabic	ar
Basque	eu
Bengali	bn
English (UK)	en-GB
Portuguese (Brazil)	pt-BR
Bulgarian	bg
Catalan	ca
Cherokee	chr
Croatian	hr
Czech	cs
Danish	da
Dutch	nl
English (US)	en
Estonian	et
Filipino	fil
Finnish	fi
French	fr
German	de
Greek	el
Gujarati	gu
Hebrew	iw
Hindi	hi
Hungarian	hu
Icelandic	is
Indonesian	id
Italian	it
Japanese	ja
Kannada	kn
Korean	ko
Latvian	lv
Lithuanian	lt
Malay	ms
Malayalam	ml
Marathi	mr
Norwegian	no
Polish	pl
Portuguese (Portugal)	pt-PT
Romanian	ro
Russian	ru
Serbian	sr
Chinese (PRC)	zh-CN
Slovak	sk
Slovenian	sl
Spanish	es
Swahili	sw
Swedish	sv
Tamil	ta
Telugu	te
Thai	th
Chinese (Taiwan)	zh-TW
Turkish	tr
Urdu	ur
Ukrainian	uk
Vietnamese	vi
Welsh	cy`)


            translate(`${value}`, { to: `${args[1]}` }).then(res => {
                console.log(res)
                msg.reply(`${user.style} 𝑇𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑖𝑜𝑛
- - - - - - - - - - - - - - - - - -		
${res}`)
            }).catch(err => {

                translate(`${value}`, { to: `en` }).then(res => {
                    console.log(res)
                    msg.reply(`${user.style} 𝑇𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑖𝑜𝑛
- - - - - - - - - - - - - - - - - -		
${res}`)

                })
            })

        }
        
        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}