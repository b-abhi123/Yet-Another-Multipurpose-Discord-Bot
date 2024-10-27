const Discord = require("discord.js")
const Levels = require("../models/Levels.js")
const canvacord = require("canvacord")
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

   let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let levelData = await Levels.findOne({ guildId: message.guild.id, userId: user.id });
  
    let rank = await Levels.find({ guildId: message.guild.id }).sort({ totalXp: -1 }).exec();
    rank = rank.filter(x => message.guild.members.cache.has(x.userId)).findIndex(x => x.userId == user.id) + 1;

    
    const rankcard = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({ dynamic: false, format: 'png'}))
    .setCurrentXP(levelData ? levelData.xp : 0)
    .setLevel(levelData ? levelData.level : 1)
    .setRank(rank)
    .setRequiredXP(levelData ? levelData.xpToLevel : 123)
    .setStatus(user.presence.status)
    .setProgressBar("#FFFFFF")
    
    .setUsername(user.username)
    .setDiscriminator(user.discriminator);

  rankcard.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });

}
  
exports.help = {
    name: "rank",
    aliases: ["level"],
    usage: "rank"
}