const random = require("something-random-on-discord").Random

exports.execute = async (client, message, args) => {
   message.channel.send("If an undefined showed up, it is because that package doesnt exist :/")
   let text = args[0]
   
   if(!text) return message.channel.send("Please provide me an NPM package that you want details on.")
   let data = await random.getNPM(text);
   message.channel.send(data)
 
  
}
  
exports.help = {
    name: "npm",
    aliases: ["npm"],
    usage: "npm <args>"
}