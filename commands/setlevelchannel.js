const Discord = require("discord.js")
const Levels = require("../models/Levels.js")
const Prizes = require("../models/Prizes.js");
const fs = require('fs');
exports.execute = async (client, message, args) => {
   let toggles = JSON.parse(fs.readFileSync("./levelenabled.json", "utf8"))
    if (!toggles[message.guild.id]){
      toggles[message.guild.id] = {
        status: 'Disabled'
      }
    }
    const me = toggles[message.guild.id].status;

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Dude you dont even have perms for this :/")

    if (me === 'Disabled') return message.channel.send(`Levels are disabled here! Do ${client.prefix}togglelevels to enable them.`);


   let channels = JSON.parse(fs.readFileSync("./levelupchannel.json", "utf8"))
    if (!channels[message.guild.id]){
      channels[message.guild.id] = {
        status: 'None'
      }
    }
    const channel = channels[message.guild.id].status;

    let settingchannel = message.mentions.channels.first()

    if(!settingchannel) return message.channel.send('Mention a channel!');

    channels[message.guild.id] = {
      status: settingchannel.id
    }
       fs.writeFile("./levelupchannel.json", JSON.stringify(channels), (err) => {
        if (err) console.log(err)
      })

    message.channel.send(`Successfully made ${settingchannel.id} as your new level up message channel!`)
}
  
exports.help = {
    name: "setlevelchannel",
    aliases: ["setlevelupchannel"],
    usage: "setlevelchannel"
}