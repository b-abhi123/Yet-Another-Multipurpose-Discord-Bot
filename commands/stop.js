
const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
    if(!message.guild.me.voice.channel) return message.channel.send("im not even in a voice channel in the first place lol"); 
    if(message.member.voice.channel){
    if(message.member.voice.channel !== message.guild.me.voice.channel) return message.channel.send('you aint in the same vc as me')
     message.guild.me.voice.channel.leave();  
    message.channel.send('Successfully left/skipped the song. If you wanna play any more songs, please run b!play again.')       
       } else {
         message.channel.send('You are not in a voice channel in the first place.')
       }
   
}
  
exports.help = {
    name: "stop",
    aliases: ["leave","dc","disconnect","skip"],
    usage: "stop"
}