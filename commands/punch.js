const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
 
   let personPoke = message.mentions.members.first();
    let pokes = ['https://c.tenor.com/SwMgGqBirvcAAAAC/saki-saki-kanojo-mo-kanojo.gif', 'https://c.tenor.com/EvBn8m3xR1cAAAAC/toradora-punch.gif', 'https://c.tenor.com/6a42QlkVsCEAAAAM/anime-punch.gif', 'https://c.tenor.com/UH8Jnl1W3CYAAAAC/anime-punch-anime.gif', 'https://c.tenor.com/fQ75hQymUSwAAAAC/ona2000-nichijou.gif'];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
        let personPoke = "nobody";

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just punched ${personPoke}! wait wha?**`)
            .setImage(pokesR)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just punched ${personPoke}!**`)
        .setImage(pokesR)
        .setColor('RANDOM');

    message.channel.send(embed);
  
}
  
exports.help = {
    name: "punch",
    aliases: ["punch"],
    usage: "punch <user>"
}