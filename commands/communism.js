const Discord = require("discord.js");
const discordImgGen = require('image-generation-for-discord')

exports.execute = async (client, message, args) => {
   var user = message.author

   if(message.mentions.users.first()) return message.lineReply('i dont promote communism among other people :+1:')
  
   const image = await discordImgGen.communism(user.avatarURL({ dynamic: false, format: "png", size: 1024 }))
  message.lineReply(new Discord.MessageAttachment(image, "communism.png"))
}
  
exports.help = {
    name: "communism",
    aliases: [],
    usage: "communism"
}