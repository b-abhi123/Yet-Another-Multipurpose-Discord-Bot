const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    message.channel.send(`**This command if currently for partners only**\nHey there~ ${message.author}!\nWe are introducing our partner program which is for the purpose of growing servers through our bot and the same for us as well!\n \nFor now, not many features are needed for your qualifying server.\n \n**How do I apply??**\nPretty easy to do so. Join the community server ${client.prefix}server and DM Mai~chael#1111 or just some admin!\nOnce you've done that, I will get back to you personally and process your submission.\n \n**What are some rewards?**\nCurrently, rewards include:\n-Specialized welcome and goodbye messages along with custom background for your server, just for free!\nCustomised commands for the server owner.\nYour very own command suggestion in the bot [1]\nCouple of new server commands unlocked!\nIncludes discord benefits.\n \nThe quality we provide for your server depends on the amount of members it has! The more the members, higher the rewards!\n \nAlso, your server owner, i.e. **${message.guild.owner.user.tag}** has to apply for it!`)
};
  
exports.help = {
    name: "setmessages",
    aliases: ["setmessage"],
    usage: "setmessages"
}