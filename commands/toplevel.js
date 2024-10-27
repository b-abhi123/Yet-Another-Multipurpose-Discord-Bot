const Discord = require("discord.js");
const Levels = require("../models/Levels.js");
const fs = require('fs');
exports.execute = async (client, message, args) => {
    
    let toggles = JSON.parse(fs.readFileSync("./levelenabled.json", "utf8"))
    if (!toggles[message.guild.id]){
      toggles[message.guild.id] = {
        status: 'Disabled'
      }
    }
    const me = toggles[message.guild.id].status;
    
    if(me === 'Disabled') return message.channel.send(`Levels are disabled here! Do ${client.prefix}togglelevels to enable them!`);

      let levelData = await Levels.find({ guildId: message.guild.id }).sort({ totalXp: -1 }).exec();  
    levelData = levelData.filter(x => message.guild.members.cache.has(x.userId)).slice(0, 10).map((x, i) => `\`${i+1}.\` <@${x.userId}> : **${x.level}** Level - **${x.totalXp}** Xp - (\`${x.xp}/${x.xpToLevel}\`)`).join("\n");
    
    if(!levelData.length) levelData = `Not Enough Data to show!`;
    let embed = new Discord.MessageEmbed().setColor("RANDOM").setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true })).setThumbnail(message.guild.iconURL({ dynamic: true }));
    embed.setDescription(`**${message.guild.name}** Leaderboards! \n\n` + levelData)
    message.channel.send(embed);     

      

     


}
  
exports.help = {
    name: "toplevel",
    aliases: ["topchat","lbchat","chatlb"],
    usage: "toplevel"
}