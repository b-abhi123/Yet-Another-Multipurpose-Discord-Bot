const { MessageEmbed } = require("discord.js");


exports.execute = async (client, message, args) => {
  
  let text = args.join(" ")
  if (!text) return message.channel.send('at least provide me wut I should say smh')
  if (args[9]) return message.channel.send('yo i cant mimic more than 9 arguments~')
  if(text.includes('@')) return message.channel.send('I dont like to ping people, sorry!')
  if(text.includes('https://' || 'http://')) return message.channel.send('Links cannot be replicated into messages lol')
  message.delete()
  message.channel.send(text)
  
   
}
  
exports.help = {
    name: "say",
    aliases: [],
    usage: "say <mssg>"
}