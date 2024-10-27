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
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || args[1];
    let embed = new Discord.MessageEmbed().setColor("RANDOM").setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Dude you dont even have perms for this :/")
    if(!level || isNaN(level) || level < 0) return message.channel.send(embed.setDescription(`Please specify a valid level :]`));
    if(!role) return message.channel.send(embed.setDescription(`Please specify a valid role/role id!`));
    
    if(!prizeData) {
        let newPrize = new Prizes({
            guildId: message.guild.id,
        }).save().then(data => { 
            return message.channel.send(`No rewards found.`);
        });
    } else {
        if(prizeData.levelPrizes.find(x => x.level == level && x.role == (role.id || role))) {
            prizeData.levelPrizes = prizeData.levelPrizes.filter(x => x.role != (role.id || role));
            prizeData.save();
            message.channel.send(embed.setDescription(`Successfully removed.`));
        } else {
            return message.channel.send(embed.setDescription(`Role could not be found!`));
        };
    };  

};

exports.help = {
  name: "prizeremove",
  aliases: ['rewardremove','removeprize','removereward'],
  usage: "prizeremove"
};
