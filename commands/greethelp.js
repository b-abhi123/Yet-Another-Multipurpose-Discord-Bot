const { MessageEmbed } = require("discord.js");
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;

exports.execute = async (client, message, args) => {
  
    let user = message.mentions.users.first() || message.author;
     const embed1 = new MessageEmbed()
        .setTitle(`Category: Greet Commands [Server Setup] Page 1`)
        .setDescription("Some customised free setup cmds!\nSome messages are only available to partnered servers, and work to fulfill your conditions at max, join our server for info on this!")
        .addField(`${client.prefix}setwelcomechannel`,"Set up an airport for welcoming!")
        .addField(`${client.prefix}setmessages`,"Currently only available to partnered servers, join our server for more info, we are literally accepting any partners on beta :]")
        .addField(`${client.prefix}setbackgroundimage`,"Currently only available to partnered servers, join our server for more info, we are literally accepting any partners on beta :]")
        .addField(`${client.prefix}setgoodbyechannel`,"Set up an airport for sending goodbyes!")
        
        
        

        
 message.author.send('Hey, here are your commands!').catch(() => message.lineReply('well i cant send messages to you, check if you actually have dms enabled dumdum'));
        
   return message.author.send(embed1).then(embed1 => {
      const confirm = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DMed you about greet help commands!')
      .setURL(embed1.url)
      .setDescription('<a:Pepe_hack:827756844092489738>  Click the title to jump to your  message!')
      
      message.lineReply(confirm) && message.react('📧')  
     })  
    
    }
  
exports.help = {
    name: "greethelp",
    aliases: ["welcomerhelp","goodbyehelp"],
    usage: "greethelp"
}