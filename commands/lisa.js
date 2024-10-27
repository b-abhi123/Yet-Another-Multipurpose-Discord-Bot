const Discord = require("discord.js");
const discordImgGen = require('image-generation-for-discord')

exports.execute = async (client, message, args) => {
   const text = args[0]

   if (!text) return message.reply("Please attach a text alongside your message.")

   const image = await discordImgGen.lisa(args.splice(0).join(" "))
  message.channel.send(new Discord.MessageAttachment(image, "caution.png"))
}
  
exports.help = {
    name: "lisa",
    aliases: [],
    usage: "lisa"
}