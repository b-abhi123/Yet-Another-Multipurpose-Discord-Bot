const Discord = require("discord.js");
const discordImgGen = require('image-generation-for-discord')

exports.execute = async (client, message, args) => {
   const text = args[0]

   if (!text) return message.reply("Please attach a text alongside your message.")
   if (args[10]) return message.lineReply('Sorry, that text is too long for me!')
   const image = await discordImgGen.danger(args.splice(0).join(" "))
  message.lineReply(new Discord.MessageAttachment(image, "caution.png"))
}
  
exports.help = {
    name: "danger",
    aliases: [],
    usage: "danger"
}