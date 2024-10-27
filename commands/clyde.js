const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
     if (!args[0]) {
    return message.lineReply(`The correct usage is ${client.prefix}clyde <message>`)
    }
    let clydeMessage = args.slice(0).join(' ');
    if (args[10]) return message.lineReply('Sorry, that text is too long for me!')
    message.lineReply({files : [{attachment: `https://ctk-api.herokuapp.com/clyde/${clydeMessage}`, name: 'file.jpg'}]});
}
  
exports.help = {
    name: "clyde",
    aliases: [],
    usage: "clyde"
}