const { MessageEmbed } = require("discord.js");
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;


exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    const embed1 = new MessageEmbed()
        .setTitle(`Category: Moderation Help | Page 1`)
        .setDescription("Features all the mod commands for your server.")
        .setThumbnail(message.author.displayAvatarURL())
        .addField(`${client.prefix}kick`,"Kick a user from your server.")
        .addField(`${client.prefix}ban`,"Pretty obvious, this bans a member from your server.")
        .addField(`${client.prefix}purge`,"Delete a particular amount of messages in a channel.")
        .addField(`${client.prefix}nuke`,"Deletes everything in a channel and clones it in the same position.")
        .addField(`${client.prefix}lock`,"Lock a particular channel in your server.")
        .addField(`${client.prefix}unlock`,"Unlock a particular channel in your server.")
        .setColor("RANDOM")
        
        .addField(`${client.prefix}addrole`,"Add a role to a user.")
        .addField(`${client.prefix}removerole`,"Remove a role from a user.")
        .addField(`${client.prefix}slowmode`,"Configure the slowmode in a channel")
        .setTimestamp()
        .setFooter(`Invite me to your server if you want to play :3`);
   message.author.send('Hey, here are your commands!').catch(() => message.lineReply('well i cant send messages to you, check if you actually have dms enabled dumdum'));
   return message.author.send(embed1).then(embed1 => {
      const confirm = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DMed you about mod help commands!')
      .setURL(embed1.url)
      .setDescription('<a:Pepe_hack:827756844092489738>  Click the title to jump to your  message!')
      
      message.channel.send(confirm) && message.react('📧')  
     })  
    
}
  
exports.help = {
    name: "moderationhelp",
    aliases: ["modhelp"],
    usage: "modhelp"
}

 
    