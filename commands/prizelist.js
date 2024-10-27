const Discord = require("discord.js")
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

     let prizeData = await Prizes.findOne({ guildId: message.guild.id});
    let embed = new Discord.MessageEmbed().setColor("RANDOM").setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true })).setThumbnail(message.guild.iconURL({ dynamic: true }));

    if(!prizeData) {
         message.channel.send(embed.setDescription(`**${message.guild.name}** - List of Reward Roles.`));
    } else {
        prizeData = prizeData.levelPrizes.filter(x => message.guild.roles.cache.has(x.role)).sort((x, y) => y.level - x.level).map(x => `<@&${x.role}> - **${x.level}**`).join("\n");
        message.channel.send(embed.setDescription(`**${message.guild.name}** List of Role Rewards :D \n\n` + prizeData));
    };  

};

exports.help = {
  name: "prizelist",
  aliases: ['rewardlist','listprize'],
  usage: "prizelist"
};
