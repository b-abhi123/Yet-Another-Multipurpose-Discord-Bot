const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    

    return message.lineReply("This bot was designed by Mai~chael#1111. Do b!server if you want to join our server for exciting giveaways, events and more! <3");

}
  
exports.help = {
    name: "developer",
    aliases: ["owner","dev","creator","god","maker","creation"],
    usage: "server"
}