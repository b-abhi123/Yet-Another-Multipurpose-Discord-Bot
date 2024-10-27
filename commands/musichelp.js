const { MessageEmbed } = require("discord.js");
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;


exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    const embed1 = new MessageEmbed()
        .setTitle(`Category: Music Help | Page 1`)
        .setDescription("Music commands are back!")
        .setThumbnail(message.author.displayAvatarURL())
        .setColor("RANDOM")
        
        .addField(`${client.prefix}play`,"Play some music into your VC.")
        .addField(`${client.prefix}dc`,"Disconnect from VC/Skip the current music")
        .setFooter('Lyrics command will come soon. Please note that this is also under development')
   message.author.send('Hey, here are your commands!').catch(() => message.lineReply('well i cant send messages to you, check if you actually have dms enabled dumdum'));
     return message.author.send(embed1).then(embed1 => {
      const confirm = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DMed you about the music commands!')
      .setURL(embed1.url)
      .setDescription('<a:Pepe_hack:827756844092489738>  Click the title to jump to your  message!')
      
      message.channel.send(confirm) && message.react('📧')  
     })  
    
  
    
}
  
exports.help = {
    name: "musichelp",
    aliases: ["helpmusic"],
    usage: "musichelp"
}
