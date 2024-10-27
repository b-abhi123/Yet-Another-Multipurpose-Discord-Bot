const { MessageEmbed } = require("discord.js");
const eco = require('discord-economy')

exports.execute = async (client, message, args) => {    
 
    var user = message.mentions.users.first()
    var amount = args[1]

    
    if (!user) return message.channel.send('we are mising a user lol') && message.react('❌');
    if (user == message.author) return message.channel.send('do you think im dumb enough to generate currency lol <:Bruh:827761438209998899>') && message.react('❌');
    if (!amount) return message.channel.send('Specify the amount you want to pay!') && message.react('❌');
    if (user.bot) return message.channel.send('dumdum bots are too rich, they dont want your cheap Roobies') && message.react('❌');
     if (args[1][0] == "-") return message.channel.send('negative values huh? sus') && message.react('❌');

    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.channel.send('lol you dont even have that many birbies to transfer') && message.react('❌');

    

    if (user && amount){
      var transfer = await eco.Transfer(message.author.id, user.id, amount)
      const TransferEmbed = new MessageEmbed()
      .setColor('GREEN')
      .setTitle('Roobies Successfully Transferred!')
      .setDescription(`Transfering ${amount} Roobies successfully done!`)
      .addField(`New Balance from ${message.author.tag}`,`${transfer.FromUser} Roobies`)
      .addField(`New Balance from ${user.tag}:`, `${transfer.ToUser} Roobies`)
      .setThumbnail(message.author.displayAvatarURL())
      message.channel.send(TransferEmbed)
      message.react('✅');
    }

}
 



  
exports.help = {
    name: "give",
    aliases: ["gib","givebirbies"],
    usage: "give"
}