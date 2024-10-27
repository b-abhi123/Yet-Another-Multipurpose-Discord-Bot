const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
 
   let personPoke = message.mentions.members.first();
    let pokes = ['https://c.tenor.com/-5AUG9ixQZgAAAAC/anime-girl.gif', 'https://c.tenor.com/wmf0u2u2aPYAAAAC/smile-anime.gif', 'https://i.imgur.com/o2SJYUS.gif', 'https://c.tenor.com/4y0delWD9p8AAAAC/yuri-on-ice-wink.gif', 'https://c.tenor.com/1XNTOsFJQY8AAAAM/wink-blushing.gif', 'https://c.tenor.com/ETGBdrWshSgAAAAM/boku-dake-ga-inai-machi-look.gif'];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
        let personPoke = "nobody";

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just winked to ${personPoke}! More like himself lol-**`)
            .setImage(pokesR)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just winked to ${personPoke}! :3**`)
        .setImage(pokesR)
        .setColor('RANDOM');

    message.channel.send(embed);
  
}
  
exports.help = {
    name: "wink",
    aliases: [],
    usage: "wink <user>"
}