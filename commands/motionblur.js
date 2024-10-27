const Discord = require("discord.js");
const discordImgGen = require('image-generation-for-discord')

exports.execute = async (client, message, args) => {
   var user = message.mentions.users.first() || client.users.cache.get(args[0])

  if(!user || !args[0]) {
   var user = message.author
}

   const image = await discordImgGen.motionblur(user.avatarURL({ dynamic: false, format: "png", size: 1024 }))
  message.channel.send(new Discord.MessageAttachment(image, "caution.png"))
}
  
exports.help = {
    name: "motionblur",
    aliases: [],
    usage: "motionblur"
}