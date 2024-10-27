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
    
    if (me === 'Disabled') return message.channel.send(`Levels are disabled here! Do ${client.prefix}togglelevels to enable them.`);

  let newlevel = args[0]
  let user = message.mentions.users.first()
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Dude you dont even have perms for this :/")
  if(!newlevel || isNaN(newlevel) || newlevel < 0) return message.channel.send(`Please specify a valid level to add a reward to.`);
  if(!user) return message.channel.send("Mention a valid member/user id.")
  

  let levelData = await Levels.findOne({ guildId: message.guild.id, userId: user.id });

  levelData.level = newlevel
  levelData.xp = 0
  levelData.xpToLevel = newlevel * 50
  levelData.totalXp = (newlevel - 1) * 50
  
  

  levelData.save().then(async _data => {
     message.reply(`Successfully added ${newlevel} to ${user.username}. Please manually give them reward roles!`)
  })

}
  
exports.help = {
    name: "setlevel",
    aliases: ["levelset", "addlevel", "givelevel"],
    usage: "setlevel"
}