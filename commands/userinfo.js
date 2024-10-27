


exports.execute = async (client, message, args) => {
   const discord = require('discord.js');
   const moment = require('moment');

const flags = {
    DISCORD_EMPLOYEE: '<:staff:850632050837815306>',
    DISCORD_PARTNER: '<:Partner:850632296826011669>',
    BUGHUNTER_LEVEL_1: '<:bughunter:850632644906975242>',
    BUGHUNTER_LEVEL_2: '<:bughunter2:850632924876767293>',
    HYPESQUAD_EVENTS: '<:hypesquadevents:850633179081867275>',
    HOUSE_BRAVERY: '<:hypesquadbrave:850633448065728582>',
    HOUSE_BRILLIANCE: '<:hypesquadbrilliant:850633665699512330>',
    HOUSE_BALANCE: '<:hypebalance:850633863599751198>',
    EARLY_SUPPORTER: '<:earlysupporterack:850634167292788746>',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: '<:db_verified_blurple:847130788376870943>',
    VERIFIED_DEVELOPER: '<:verifiedDevBadge:744342594271838289>'
};


        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        
        let userFlags = member.user.flags.toArray();
        let embed = new discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`ID • ${member.id}`)
        .setDescription(`**Username:** ${member.user.tag}\n**Badges:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : '0'}\n**Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest}\n**Created At:** ${moment(member.user.createdTimestamp).format('LL LTS')}\n**Joined At:** ${moment(member.joinedAt).format('LL LTS')}\n**Psst,** nitro badges dont count :]`)
        message.channel.send(embed)
}


  
  

  
exports.help = {
    name: "userinfo",
    aliases: ["infouser"],
    usage: "userinfo"
}