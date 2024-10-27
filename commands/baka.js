
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
  
    let personPoke = message.mentions.members.first();
    let pokes = ["https://i.imgur.com/UND2T2w.gif","https://i.imgur.com/z4slGm4.gif","https://i.imgur.com/oCogv8c.gif","https://c.tenor.com/UsggMuRixo0AAAAC/baka-anime.gif"];
    let pokesR = pokes[Math.floor(Math.random() * pokes.length)];
    let quote;
    let quoteR;
    if (!personPoke) {
        let personPoke = "nobody";

        let embed = new Discord.MessageEmbed()
            .setDescription(`**<@${message.author.id}> b-baka~! **`)
            .setImage(pokesR)
            .setColor("RANDOM");

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}>: b-baka~! ${personPoke}**`)
        .setImage(pokesR)
        .setColor('RANDOM');

    message.channel.send(embed);
        

 }
  
  
exports.help = {
    name: "baka",
    aliases: ["bakaa"],
    usage: "baka"
}