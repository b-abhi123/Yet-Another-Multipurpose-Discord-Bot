const { MessageEmbed } = require("discord.js");
const jokes = require('discord-jokes');
exports.execute = async (client, message, args) => {
  
  jokes.getRandomDadJoke((joke) => {
    message.channel.send(joke)
  })
  
}
  
exports.help = {
    name: "joke",
    aliases: ["funny"],
    usage: "joke"
}