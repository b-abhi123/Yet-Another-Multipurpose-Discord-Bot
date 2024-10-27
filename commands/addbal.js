const Discord = require("discord.js");
const eco = require('discord-economy')

exports.execute = async (client, message, args) => {
  if (!client.config.admins.includes(message.author.id)) return message.channel.send('Command restricted to Bot Owner. Nice try =)') && message.react('😂');
  let user = message.mentions.users.first();
  if (!user) return message.channel.send("I need a user to add balance.") && message.react('❌');
  let amount = args[1];
  if (!amount || isNaN(amount)) return message.reply("Give me an amount bro") && message.react('❌');
  
  
  eco.AddToBalance(user.id, parseInt(amount));
  
  message.react('✅');
}
  
exports.help = {
    name: "addbal",
    aliases: ["addbalance"],
    usage: "addbal"
}