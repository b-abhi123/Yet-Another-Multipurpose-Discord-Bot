const fetch = require('node-fetch');
const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message, args) => {
      const tweet = args.join(" ");
        if (!tweet) {
            return message.channel.send("Mr. President Says: \`What to tweet ?\`")
        }
        if (tweet.length > 68) tweet = tweet.slice(0, 65) + '...';

        try {
            const res = await fetch('https://nekobot.xyz/api/imagegen?type=trumptweet&text=' + tweet);
            const img = (await res.json()).message;
            message.channel.send({files: [{attachment: img, name: "trumptweet.png"}]});
        } catch (err) {
            console.log(err);
            message.channel.send(err);
        }
}
  
  

  
exports.help = {
    name: "trumptweet",
    aliases: [],
    usage: "trumptweet"
}