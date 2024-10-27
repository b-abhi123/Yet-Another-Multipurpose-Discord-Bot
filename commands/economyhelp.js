const { MessageEmbed } = require("discord.js");
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;

exports.execute = async (client, message, args) => {
  
    let user = message.mentions.users.first() || message.author;
     const embed1 = new MessageEmbed()
        .setTitle(`Category: Fun Commands [Fun] Page 1`)
        .setDescription("Some Fun Commands so you and Mai can spend quality time together!")
        .addField(`${client.prefix}bal`,"Display your balance.")
        .addField(`${client.prefix}leaderboard`,"Display your server coins leaderboard [Could be buggy, so please use b!bal to see your income] Privacy is also protected.")
        .addField(`${client.prefix}daily`,"Get a random amount of daily Roobies.")
        .addField(`${client.prefix}give`,"Award some balance from your wallet, what generosity :sob:")
        .addField(`${client.prefix}search`,"Search for roobies :)")
        .addField(`${client.prefix}beg`,"Beg for roobies.")
        .addField(`${client.prefix}work`,"Working is the best way to earn stuff :)")
        .addField(`${client.prefix}slots`,"[G] Most difficult gambling command.")
        .addField(`${client.prefix}coinflip`,"[G] Easiest gambling command.")
        .addField(`${client.prefix}rolldice`,"[G] Mediocre gambling command.")
        .addField(`${client.prefix}removedata`,"If you've had enough, sure go ahead.")
        .addField(`${client.prefix}lootboxhelp`,"Shows you details about your lootboxes")
         .addField(`${client.prefix}trader`,"Get info on the regular traders from some other country")
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp()
        .setFooter(`Invite me to your server if you want to play :3`)
        .setThumbnail(message.author.displayAvatarURL());
 message.author.send('Hey, here are your commands!').catch(() => message.lineReply('well i cant send messages to you, check if you actually have dms enabled dumdum'));
        
   return message.author.send(embed1).then(embed1 => {
      const confirm = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DMed you about economic help commands!')
      .setURL(embed1.url)
      .setDescription('<a:Pepe_hack:827756844092489738>  Click the title to jump to your  message!')
      
      message.lineReply(confirm) && message.react('📧')  
     })  
    
    }
  
exports.help = {
    name: "economyhelp",
    aliases: ["economycmds","economichelp"],
    usage: "economyhelp"
}