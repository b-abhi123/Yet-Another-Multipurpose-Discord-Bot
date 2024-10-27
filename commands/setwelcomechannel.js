
const Discord = require("discord.js")
const fs = require('fs');
exports.execute = async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Dude you dont even have perms for this :/")
  
let chans = JSON.parse(fs.readFileSync("./welcomechannels.json", "utf8"))
    if (!chans[message.guild.id]){
      chans[message.guild.id] = {
        status: 'Welcome to **${member.guild.name}**, **${member}**, we hope you enjoy your stay here!'
      }
    }
    const dachannel = chans[message.guild.id].status;
const settingchannel = message.mentions.channels.first()
if(!settingchannel) return message.channel.send('Mention a channel that I have access to!');

    if(settingchannel.type === 'voice') return message.channel.send('You serious? I cant chat in vc yet ^^')

    const permissions = settingchannel.permissionsFor(client.user);

    if (!permissions.has("SEND_MESSAGES")) return message.reply("sorry man i dont have perms to talk in there lol");

    chans[message.guild.id] = {
      status: settingchannel.id
    }
       fs.writeFile("./welcomechannels.json", JSON.stringify(chans), (err) => {
        if (err) console.log(err)
      })

    message.channel.send(`Successfully made ${settingchannel.id} as your new welcome message channel!`)
    
    
}
  
exports.help = {
    name: "setwelcomechannel",
    aliases: ["setgreetchannel"],
    usage: "setwelcomechannel"
}