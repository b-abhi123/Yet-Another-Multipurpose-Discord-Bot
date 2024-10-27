
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
   if (message.member.voice.channel) {
   if (!args[0]) return message.channel.send(`Playing air requested...wait what? Mention a music search query-`)
   const permissions = message.member.voice.channel.permissionsFor(message.client.user);

   if (!permissions.has("CONNECT")) return message.reply("well how can i play music into your vc if i cant connect in the first place lol");
    if (!permissions.has("SPEAK")) return message.reply('Even tho i did connect, i cant speak in your channel. Reconfigure the perms and try again.');
      const connection = await message.member.voice.channel.join();
      message.channel.send('Looking up your query...')
      const play = require('discordjs-ytdl')
      await play.play(connection, args.join(" "), '')
      let title = await play.title(args.join(" "), '')
      message.channel.send(`Now playing ${title} requested by ${message.author}`)
   } else {
     message.reply('lol you arent even in a vc');
  }


}
  
exports.help = {
    name: "play",
    aliases: ["pley"],
    usage: "play <song>"
}
