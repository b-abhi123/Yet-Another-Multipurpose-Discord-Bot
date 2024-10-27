const { MessageEmbed } = require("discord.js");
const eco = require('discord-economy')

exports.execute = async (client, message, args) => {    
 
    var output = await eco.Daily(message.author.id)
 
 
    if (output.updated) {
      var got = await Math.floor((Math.random() * 1000) + 1);
      if (got < 100){
        message.lineReply(`That was an unlucky daily reset **+${got}!**`)
      } else if (got < 500){
       message.lineReply(`**+${got}** added to your Roobies!`)
      } else if (got < 1000){
       message.lineReply(`That is some good finding...**+${got}** added to your Roobies!`)
      }
      var profile = await eco.AddToBalance(message.author.id, got)
 
    } else {
     message.lineReply(`im not a money tree bro, wait ${output.timetowait} for your next daily!`)
    }
 

}

  
exports.help = {
    name: "daily",
    aliases: ["dailybirbies"],
    usage: "daily"
}