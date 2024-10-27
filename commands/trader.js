
const Discord = require('discord.js');
const fs = require('fs');
exports.execute = async (client, message, args) => {
    
    message.channel.send(`HELLO! Oh tis you again ${message.author.username}, how many times do I tell you??? im not in your city rn, call me again later bruh`)


}
  
exports.help = {
    name: "trader",
    aliases: ["tradehelp"],
    usage: "trader"
}