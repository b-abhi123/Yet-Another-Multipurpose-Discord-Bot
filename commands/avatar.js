const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author
    message.channel.send(`${user.tag}'s cool avatar is here!`)
    message.channel.send(user.displayAvatarURL());
    
    
}
  
exports.help = {
    name: "avatar",
    aliases: ["myavatar"],
    usage: "avatar"
}