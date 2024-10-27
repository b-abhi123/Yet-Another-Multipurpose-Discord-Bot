const Discord = require("discord.js");

exports.execute = async (client, message, args) => {
 
  if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("uhhh? you dont have perms :/")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`${message.channel} has been Locked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}

  
exports.help = {
    name: "lock",
    aliases: ["lockdown"],
    usage: "lockdown <channelname>"
}