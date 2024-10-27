const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
 
   let personPoke = message.mentions.members.first();
    let pokes = ['https://i.imgur.com/2lacG7l.gif','https://i.imgur.com/4ssddEQ.gif','https://i.imgur.com/F3cjr3n.gif','https://i.imgur.com/LUypjw3.gif'];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
        let personPoke = "nobody";

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just patted ${personPoke}! at least pat someone else-**`)
            .setImage(pokesR)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just patted ${personPoke}!**`)
        .setImage(pokesR)
        .setColor('RANDOM');

    message.channel.send(embed);
  
}
  
exports.help = {
    name: "pat",
    aliases: ["rub"],
    usage: "pat <user>"
}