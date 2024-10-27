const Discord = require("discord.js");
const discordImgGen = require('image-generation-for-discord')

exports.execute = async (client, message, args) => {
   const text = args[0]

   if (!text) return message.lineReply("Please attach a text alongside your message.")
   if (text.includes('@')) return message.lineReply('You filthy mortal! Do you not feel guilty burning people?')
   if (args[10]) return message.lineReply('Sorry, that text is too long for me!')
   const image = await discordImgGen.burn(args.splice(0).join(" "))
  message.lineReply(new Discord.MessageAttachment(image, "caution.png"))
}
  
exports.help = {
    name: "burn",
    aliases: [],
    usage: "burn"
}