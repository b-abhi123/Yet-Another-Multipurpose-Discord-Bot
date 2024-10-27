const { MessageEmbed } = require("discord.js");
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;


exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    const embed1 = new MessageEmbed()
        .setTitle(`Category: Anime Commands [Fun]`)
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('BLACK')
        .setDescription("Some Anime Commands so you and Mai can spend quality time together!")
        .addField(`${client.prefix}time`,"Get your current time [Automatically syncs with your location] also why does this belong in anime lol")
        .addField(`${client.prefix}owofy`,"OwO a piece of text, and yes I love OwOs :)")
        .addField(`${client.prefix}leetify`,"uhhh...leetify a piece of text-")
        .addField(`${client.prefix}animeme`,"Get memes, specifically anime ones.")
        .addField(`${client.prefix}poke`,"Poke someone else yes")
        .addField(`${client.prefix}slap`,"Slap someone on discord, perfect.")
        .addField(`${client.prefix}kiss`,"Its the year 2021, you can now kiss people from Discord.")
        .addField(`${client.prefix}baka`,"Oni~chan! Baka~")
        .addField(`${client.prefix}punch`,"Pretty obvious, punch someone with this")
         .addField(`${client.prefix}wink`,"Nice start for a flirt challenge")
        .addField(`${client.prefix}boot`,"Teach someone a good lesson they deserve :]")
        .addField(`${client.prefix}pat`,"Pat someone on discord~")
        .setColor("BLACK")
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`Invite me to your server if you want to play :3`);
 message.author.send('Hey, here are your commands!').catch(() => message.lineReply('well i cant send messages to you, check if you actually have dms enabled dumdum'));
    

     return message.author.send(embed1).then(embed1 => {
      const confirm = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DMed you about anime help commands!')
      .setURL(embed1.url)
      .setDescription('<a:Pepe_hack:827756844092489738> Click the title to jump to your  message!')
      message.lineReply(confirm) && message.react('📧')
     }).catch(() => message.lineReply('I hit an error sending you a message! Please check if you have DMs enabled!'));


     

      
     
}
  
exports.help = {
    name: "animehelp",
    aliases: ["helpanime"],
    usage: "animehelp"
}