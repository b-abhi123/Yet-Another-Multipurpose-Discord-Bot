const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
 
   let personPoke = message.mentions.members.first();
    let pokes = ["https://i.imgur.com/IgGumrf.gif","https://i.imgur.com/e0ep0v3.gif","https://i.imgur.com/TItLfqh.gif","https://i.imgur.com/sGVgr74.gif","https://i.imgur.com/So3TIVK.gif","https://i.imgur.com/9758cJX.gif"];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
        let personPoke = "nobody";

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> just kissed ${personPoke}! At least kiss someone else-**`)
            .setImage(pokesR)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> just kissed ${personPoke}! Lovebirds!**`)
        .setImage(pokesR)
        .setColor('RANDOM');

    message.channel.send(embed);
  
}
  
exports.help = {
    name: "kiss",
    aliases: ["love","kis"],
    usage: "kiss <user>"
}