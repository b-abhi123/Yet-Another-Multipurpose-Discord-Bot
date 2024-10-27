const Discord = require("discord.js");

exports.execute = async (client, message, args) => {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Sentenced for 69 years of jail.")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
    
}
  
exports.help = {
    name: "jail",
    aliases: [],
    usage: "jail"
}