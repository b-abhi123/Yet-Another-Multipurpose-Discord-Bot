const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have the permission for that.");
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I don't have the permission for that.");

    message.channel.clone({ parent: `${message.channel.parentID}`, position: message.channel.rawPosition }).then(ch => { ch.send('Channel nuked successfully! https://i.gifer.com/6Ip.gif'); })
    message.channel.delete();
}
  
exports.help = {
    name: "nuke",
    aliases: [],
    usage: "nuke"
}