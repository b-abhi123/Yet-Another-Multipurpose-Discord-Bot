const { MessageEmbed } = require("discord.js");
const eco = require('discord-economy');
const talkedRecently = new Set();

exports.execute = async (client, message, args) => {
  
    if (talkedRecently.has(message.author.id)) {
            message.lineReply("If you try to gamble more than necessary, I might as well suck all ya cash up, wait 5s for the next gamble cmd");
    } else {
      
      var flip = args[0] //Heads or Tails
   var amount = args[1] //Coins to gamble
 
    if (!flip || !['heads', 'tails'].includes(flip)) return message.lineReply('specify either heads/tails | b!coinflip <heads/tails> <amount>') && message.react('❌')
    if (!amount) return message.lineReply('you cant gamble with nothing, gimme an amount lol | b!coinflip <heads/tails> <amount>') && message.react('❌')
    if(amount == '0') return message.lineReply('You cannot gamble with nothing lol')
    if (args[1][0] == "-") return message.lineReply('negative values huh? sus') && message.react('❌');
    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.lineReply('bro you dont even have that much roobies to gamble, you might as well be caught up in a debt trap next bruh.\ I hope you didnt watch too much kakegurui') && message.react('❌')
 
    var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)

    const won = new MessageEmbed()
    .setColor('GREEN')
    .setTitle('Coinflip successfully won! :tada:')
    .setDescription('GG, you chose the correct option. You wont succeed for long though-')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`New balance after gambling ${amount}`, `${gamble.newbalance} Roobies`)

    const lost = new MessageEmbed()
    .setColor('RED')
    .setTitle('Coinflip lost! :joy:')
    .setDescription(`LOL you lost ${amount}..RIP`)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`New balance after gambling ${amount}`, `${gamble.newbalance} Roobies :sob:`)

    if (gamble.output == "won"){
      message.lineReply(won)
    } else 
      message.lineReply(lost)

      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 5000);
    }

}
  
exports.help = {
    name: "coinflip",
    aliases: ["flipcoin"],
    usage: "coinflip"
}