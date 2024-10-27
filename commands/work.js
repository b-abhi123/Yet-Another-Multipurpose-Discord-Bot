const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const eco = require('discord-economy');
const talkedRecently = new Set();
const canvacord = require('canvacord');

exports.execute = async (client, message, args) => {


    if (talkedRecently.has(message.author.id)) {
            message.channel.send("if you work too much you'll be tired, so uh go to the casino to gamble something for 30 seconds maybe? [b!economyhelp]");
    } else {
        
    var output = await eco.Work(message.author.id, {
      failurerate: 30,
      money: Math.floor(Math.random() * 1000),
      jobs: ['Discord Moderator', 'Streamer', 'Soccer Player','Noob','Cashier','Armyperson','Graphics Artist','Singer','Animator','Programmer','Boi :flushed:','Gorl :flushed:','Businessperson']
    })
    //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
    if (output.earned == 0) return message.reply('The boss didnt like how you worked and you got fired. RIP.') 

    const earned = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Work completed successfully!')
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`You worked as a ${output.job}. Hopefully, the boss liked your job and he gave you ${output.earned} Roobies. You now own ${output.balance} Roobies :O`)
    .setFooter('b!server for exciting giveaways and events in our communnity :)')

    message.channel.send(earned)
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 30000);
    }
    
 

  
}
  
exports.help = {
    name: "work",
    aliases: ["wrk"],
    usage: "work"
}