

const Discord = require("discord.js")

exports.execute = async (client, message, args) => {
   const mention = message.mentions.members.first() || message.member;
    const avatar = mention.user.displayAvatarURL({size: 512, format: "png"});

        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/tableflip?user=${avatar}`, name: "tableflip.png"}]});
}
  
  

  
exports.help = {
    name: "tableflip",
    aliases: [],
    usage: "tableflip"
}