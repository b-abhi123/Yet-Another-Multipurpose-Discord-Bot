const { MessageEmbed } = require("discord.js");
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;
const fs = require('fs');

exports.execute = async (client, message, args) => {
  let toggles = JSON.parse(fs.readFileSync("./levelenabled.json", "utf8"))
    if (!toggles[message.guild.id]){
      toggles[message.guild.id] = {
        status: 'Disabled'
      }
    }
    const me = toggles[message.guild.id].status;

    let user = message.mentions.users.first() || message.author;

    const embed1 = new MessageEmbed()
        .setTitle(`Category: Levels Help | Page 1`)
        .setDescription(`Features all the level and role reward system for your server [Disabled by default]. In the server you called it from, its ${me}`)
        .setThumbnail(message.author.displayAvatarURL())
        .addField(`${client.prefix}togglevels`,"Automatically disabled at first, so please run this command to actually enable/disable this!")
        .addField(`${client.prefix}rank`,"Get your server rank card.")
        .addField(`${client.prefix}toplevel`,"Get the server leaderboard!")
        .addField(`${client.prefix}prizelist`,"Lists out your server level role rewards!")
        .addField(`${client.prefix}setlevel`,"Set someone's level")
        .addField(`${client.prefix}prizeadd`,"Add a server level role reward.")
        .addField(`${client.prefix}prizeremove`,"Remove a specific server level role reward.")
        .addField(`${client.prefix}setlevelchannel`,"Select a channel for sending level up messages!")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`Invite me to your server if you want to play :3`);
   message.author.send('Hey, here are your commands!').catch(() => message.lineReply('well i cant send messages to you, check if you actually have dms enabled dumdum'));
   return message.author.send(embed1).then(embed1 => {
      const confirm = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DMed you about level help commands!')
      .setURL(embed1.url)
      .setDescription('<a:Pepe_hack:827756844092489738>  Click the title to jump to your  message!')
      
      message.channel.send(confirm) && message.react('📧')  
     })  
    
}
  
exports.help = {
    name: "levelshelp",
    aliases: ["levelhelp","helplevels"],
    usage: "levelshelp"
}

 
    