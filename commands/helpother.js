const { MessageEmbed } = require("discord.js");
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;


exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    const embed1 = new MessageEmbed()
        .setTitle(`Category: Other Help [Utilities] | Page 1`)
        .setDescription("Features all the commands that don't belong elsewhere.")
        .setThumbnail(message.author.displayAvatarURL())
        .setColor("RANDOM")
        .addField(`${client.prefix}afk`,"Set your AFK to a reason.")
        .addField(`${client.prefix}removeafk`,"Remove your AFK if you have one.")
        .addField(`${client.prefix}stats`,"Displays the entire bot statistics")
        .addField(`${client.prefix}developer`,"yea this is it")
        .addField(`${client.prefix}invite`,"Invite me for a cookie :)")
        .addField(`${client.prefix}ping`,"Gives the bot latency.")
        .addField(`${client.prefix}review`,"Give us a review!")
        .addField(`${client.prefix}server`,"Join our support server for help, giveaways and events!")
        .addField(`${client.prefix}channelinfo`,"Get information about the channel you're in")
        .addField(`${client.prefix}changelog`,"Get bot updates with a single cmd!")
        .addField(`${client.prefix}translate`,`Translate a specific language into another one. This is still under development, the syntax is ${client.prefix}translate [from abbr.]-[to abbr.] "text".`)
        .addField(`${client.prefix}covid`,"Fetch Covid Stats of a country.")
        .addField(`${client.prefix}weather`,"Fetch the weather for a region.")
        .addField(`${client.prefix}userinfo`,"Get info on yourself, a bot or a specific user.")
        .addField(`${client.prefix}npm`,"Get info on an NPM Package.")
        .addField(`${client.prefix}prefix`,"Get your prefix, and with arguments, change it as well.")
   message.author.send('Hey, here are your commands!').catch(() => message.lineReply('well i cant send messages to you, check if you actually have dms enabled dumdum'));
     return message.author.send(embed1).then(embed1 => {
      const confirm = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DMed you about other help commands!')
      .setURL(embed1.url)
      .setDescription('<a:Pepe_hack:827756844092489738>  Click the title to jump to your  message!')
      
      message.channel.send(confirm) && message.react('📧')  
     })  
    
  
    
}
  
exports.help = {
    name: "otherhelp",
    aliases: ["helpother"],
    usage: "otherhelp"
}
