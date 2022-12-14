/* AsunaBot
description: openai api*/

var pluginName = "openai"
var pluginAuthor = "Feuerherz"
var pluginVersion = 1.0

module.exports = {

    image: async function (msg, value, args, user, client, MessageMedia)  {

        if (user.coins < 20) return msg.reply(`${user.style} You dont have enough money`)
        if (value.length < 1) return msg.reply(user.style+" please enter something")

        var asuna = require('./asuna');
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
          apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);

        msg.react("⌛")

        immageapi();
        async function immageapi() {
            try {
                const response = await openai.createImage({
                    prompt: value,
                    n: 1,
                    size: "1024x1024",
                  });
                  image_url = response.data.data[0].url;
                  
                  console.log (image_url)

                  var mediaLink = await MessageMedia.fromUrl(imageurl);
                  client.sendMessage(msg.from, mediaLink, { caption: "Generation complete :). Total cost: 20$. You now have "+user.coins-20+"$ left" }).then(function (res) { }).catch(function (err) { });
                  msg.react("🖤")


                  db.query(
                    `UPDATE Users SET coins = coins-20, xp = xp + 2 WHERE user_id=${user_id}`
                    , function (error, results, fields) {
                        if (error) console.log(error.message);
                    });

            } catch (err) {
                msg.reply(user.style + " there was an error lol cryptic details:\n\n\n" + err.message)
                msg.react("😞")
            }
        }


        asuna.log(pluginName, pluginVersion, pluginAuthor, false)
    }
}
