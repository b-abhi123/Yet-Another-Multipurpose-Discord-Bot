const Discord = require("discord.js");
const discordImgGen = require('image-generation-for-discord')

exports.execute = async (client, message, args) => {
   var user = message.author

   if(message.mentions.users.first()) return message.lineReply('Filty mortal detected trying to fry other people. *Dials 911*')

   const image = await discordImgGen.deepfry(user.avatarURL({ dynamic: false, format: "png", size: 1024 }))
 message.lineReply(new Discord.MessageAttachment(image, "caution.png"))
}
  
exports.help = {
    name: "deepfry",
    aliases: [],
    usage: "deepfry"
}