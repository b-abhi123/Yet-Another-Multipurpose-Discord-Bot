const { MessageEmbed } = require("discord.js");
const eco = require('discord-economy');
const talkedRecently = new Set();

exports.execute = async (client, message, args) => {
  
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("If you try to gamble more than necessary, I might as well suck all ya cash up, wait 5s for the next gamble cmd");
    } else {
    var roll = args[0] //Should be a number between 1 and 6
    var amount = args[1] //Coins to gamble
 
    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll))) return message.channel.send('specify a number between 1-6 bro') && message.react('❌')
    if (!amount) return message.channel.send('i cant gamble nil values, mention an amount!') && message.react('❌')
    if(amount == '0') return message.reply('You cannot gamble with nothing lol')
    if (args[1][0] == "-") return message.channel.send('negative values huh? sus') && message.react('❌');
    var output = eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('im not dumb to realise you got less Roobies than the one you are tryna gamble') && message.react('❌');
 
    var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
    var promised = amount * 3
    
    const won = new MessageEmbed()
    .setColor('GREEN')
    .setTitle('Dice Roll successfully won! :tada:')
    .setDescription(`GG, you chose the correct number and won 3x the bet [+${promised}] and your bet amount! You wont succeed for long though- :sob:`)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`New balance after gambling ${amount}`, `${gamble.newbalance} Roobies`)

    const lost = new MessageEmbed()
    .setColor('RED')
    .setTitle('Dice Roll lost! :joy:')
    .setDescription(`You rolled ${gamble.dice}...LOL you lost ${amount}..RIP`)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`New balance after gambling ${amount}`, `${gamble.newbalance} Roobies :sob:`)

    if (gamble.output == "won"){
      message.channel.send(won)
      eco.AddToBalance(user.id, parseInt(amount));
    } else 
    message.channel.send(lost)
    
 
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 5000);
    }

}
  
exports.help = {
    name: "rolldice",
    aliases: ["dice"],
    usage: "rolldice"
}