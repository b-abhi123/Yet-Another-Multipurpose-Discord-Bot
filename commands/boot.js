const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
 
   let personPoke = message.mentions.members.first();
    let pokes = ["https://i.imgur.com/0KGMuyy.gif","https://i.imgur.com/2Yd3xFg.gif","https://i.imgur.com/rKkQvKK.gif","https://i.imgur.com/LM6XW0R.gif"];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
        let personPoke = "nobody";

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just kicked ${personPoke}! More like himself lol**`)
            .setImage(pokesR)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just kicked ${personPoke}! I hope its not too fatal tho-**`)
        .setImage(pokesR)
        .setColor('RANDOM');

    message.channel.send(embed);
  
}
  
exports.help = {
    name: "boot",
    aliases: ["kic"],
    usage: "boot <user>"
}