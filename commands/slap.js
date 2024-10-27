const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
 
   let personPoke = message.mentions.members.first();
    let pokes = ['https://i.imgur.com/fm49srQ.gif', 'https://i.imgur.com/4MQkDKm.gif', 'https://i.imgur.com/o2SJYUS.gif', 'https://i.imgur.com/oOCq3Bt.gif', 'https://i.imgur.com/Agwwaj6.gif', 'https://i.imgur.com/oRsaSyU.gif', 'https://i.imgur.com/CwbYjBX.gif'];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
        let personPoke = "nobody";

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just slapped ${personPoke}! More like himself lol-**`)
            .setImage(pokesR)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just slapped ${personPoke}! Painful-**`)
        .setImage(pokesR)
        .setColor('RANDOM');

    message.channel.send(embed);
  
}
  
exports.help = {
    name: "slap",
    aliases: ["hit"],
    usage: "slap <user>"
}