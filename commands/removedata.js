const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const eco = require('discord-economy');
const talkedRecently = new Set();

exports.execute = async (client, message, args) => {
 	
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("dont take me for granted. Next delete database prompt every 60s");
    } else {
      
      let filter = m => m.author.id === message.author.id
     message.channel.send(`ALL YOUR CURRENCY DATA WILL BE DELETED! Do you want to confirm? \`YES\` / \`NO\``).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            message.author.send('We noticed that your profile for our economy sector was self destructed. If this was prompted by you, please give us a review with b!review so we can work on making the bot better. If not, then please contact us through support in our community server. For the link, do b!server, thank you!')
            message.channel.send(`Your Data was successfully deleted from our database. Please check your DMs for further info.`)
            eco.Delete(message.author.id)
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.channel.send(`Process for your database deleting was terminated`)
          } else {
            message.channel.send(`Automatically terminated due to invalid response [yes/no]`)
          }
        })
        .catch(collected => {
            message.channel.send('that took a hella lot of time, try again later');
        });
    })

      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 60000);
    }
    
 

  
}
  
exports.help = {
    name: "removedata",
    aliases: ["cleanmyself"],
    usage: "removedata"
}