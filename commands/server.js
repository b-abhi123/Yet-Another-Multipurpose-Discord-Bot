const Discord = require("discord.js");
const ownerid = "619457552563961896";

exports.execute = async (client, message, args) => {
    
   message.channel.send(`Join our community server for giveaways, events, support and much more! https://discord.gg/RCDuQVfhJz`)
  
}
  
exports.help = {
    name: "server",
    aliases: ["giveaways","events"],
    usage: "server"
}