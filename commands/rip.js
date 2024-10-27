const Discord = require("discord.js");

exports.execute = async (client, message, args) => {
    
  const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Rest In Peace.")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/rip?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
    
}
  
exports.help = {
    name: "rip",
    aliases: ["die"],
    usage: "rip"
}