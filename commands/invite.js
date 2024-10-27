const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    
    message.channel.send(`The link to invite Bunny Girl Senpai is here! We are giving 100k Roobies to server owners if they invite us in beta mode! Join our server by doing ${client.prefix}server to claim it!`) 
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=834630917879627817&permissions=8&scope=bot');
 
}
  
exports.help = {
    name: "invite",
    aliases: ["invite"],
    usage: "invite"
}