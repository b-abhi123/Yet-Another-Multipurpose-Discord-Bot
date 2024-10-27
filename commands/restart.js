const Discord = require("discord.js");
const ownerid = "759743389037101066";

exports.execute = async (client, message, args) => {
    
   if (client.config.admins.includes(message.author.id)) {
    message.channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(client.config.token));
   } else message.react('😂')

  
}
  
exports.help = {
    name: "reset",
    aliases: ["restart"],
    usage: "reset"
}