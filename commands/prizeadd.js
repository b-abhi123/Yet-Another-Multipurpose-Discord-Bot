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

    let level = args[0]
    let prizeData = await Prizes.findOne({ guildId: message.guild.id});
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
    let embed = new Discord.MessageEmbed().setColor("RANDOM").setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Dude you dont even have perms for this :/")
    if(!level || isNaN(level) || level < 0) return message.channel.send(embed.setDescription(`Please specify a valid level to add a reward to.`));
    if(!role) return message.channel.send(embed.setDescription(`Please specify a valid role or role id to add the reward to.`));
    
    if(!prizeData) {
        let newPrize = new Prizes({
            guildId: message.guild.id,
            levelPrizes: [{ level: level, role: role.id}]
        }).save();
    } else {
        if(prizeData.levelPrizes.find(x => x.level == level && x.role == role.id)) {
            message.channel.send(embed.setDescription(`This ${role} is already included for Level **${level}**!`));
        } else {
            prizeData.levelPrizes.push({ level: level, role: role.id});
            prizeData.save();
            message.channel.send(embed.setDescription(`Role added successfully! The ${role} will be given to users on reaching ${level}!`));
        };
    };  
};

exports.help = {
  name: "prizeadd",
  aliases: ['addreward','addprize','rewardadd'],
  usage: "prizeadd <level> <role>"
};
