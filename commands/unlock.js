const Discord = require("discord.js");

exports.execute = async (client, message, args) => {
 
  if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
     return message.channel.send("mane you don't have perms for this wdym")
     }
     message.channel.overwritePermissions([
       {
          id: message.guild.id,
          null : ['SEND_MESSAGES'],
       },
      ],);
     const embed = new Discord.MessageEmbed()
     .setTitle("Channel Unlocked.")
     .setDescription(`${message.channel} has been Unlocked`)
     .setColor("RANDOM");
     await message.channel.send(embed);
     message.delete();
}
  
exports.help = {
    name: "unlock",
    aliases: ["unlockdown"],
    usage: "unlockdown <channelname>"
}