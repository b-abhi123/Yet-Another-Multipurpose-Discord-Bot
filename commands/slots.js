

  const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const eco = require('discord-economy');
const talkedRecently = new Set();

exports.execute = async (client, message, args) => {
 	
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("dont gamble too much or i'll suck all your cash up. 5s per gamble.");
    } else {
        
    
    var amount = args[0] //Coins to gamble
 
    if (!amount) return message.channel.send('i cant gamble nil values, mention an amount!') && message.react('❌')
    if(amount == '0') return message.reply('You cannot gamble with nothing lol')
    if (args[0][0] == "-") return message.channel.send('negative values huh? sus') && message.react('❌');
 
    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('im not dumb to realise you got less Roobies than the one you are tryna gamble') && message.react('❌');
 
    var gamble = await eco.Slots(message.author.id, amount, {
      width: 3,
      height: 1
    }).catch(console.error)
    
    var promised = amount * 5

    const won = new MessageEmbed()
    .setColor('GREEN')
    .setTitle(`${gamble.grid} Slots successfully won! :tada:`)
    .setDescription(`HOWWW, you got sooo lucky and won 5x the bet [+${promised}] along with your bet amount ! You wont succeed for long though- :sob:`)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`New balance after gambling ${amount}`, `${gamble.newbalance} Roobies`)

    const lost = new MessageEmbed()
    .setColor('RED')
    .setTitle(`${gamble.grid} Slots lost! :joy:`)
    .setDescription(`You didnt succeed on winning my slots machine, you lost ${amount}..RIP`)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`New balance after gambling ${amount}`, `${gamble.newbalance} Roobies :sob:`)

    if (gamble.output == "won"){
      message.channel.send(won)
      eco.AddToBalance(user.id, parseInt(promised));      
    } else 
    message.channel.send(lost)
    
 
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 5000);
    }
    
}

  
exports.help = {
    name: "slots",
    aliases: ["slot"],
    usage: "slots"
}