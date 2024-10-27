const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Lol you need to have the manage roles perms to remove roles from particular users.");
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("You haven't given me the Manage Roles perms, so I cannot remove roles from users :]");
        
        if (!args[0]) return message.channel.send(`At least enter a role lol. The syntax is ${client.prefix}removerole <user> <role>/<roleid>`)

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.channel.send(`Give me a user too >:( The syntax is ${client.prefix}removerole <user> <role>/<roleid>`);
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('Eh, i cant remove this role-')

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("Uhm, either add a role id or ping a role :/")

        if (!role) return message.channel.send("I can't find that role-")

        if (role.managed) return message.channel.send("Bruh I cannot remove that role-")
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('This role is higher than me. Please configure the role hierarchy.')

       
        if (!rMember.roles.cache.has(role.id)) await rMember.roles.remove(role.id);
        
  
        let ticon = rMember.user.avatarURL({ dynamic: true, size: 2048 });
        let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
        const embed = new MessageEmbed()
        .setAuthor("Done, removed role")
        .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
        .setColor("RED")
        .setDescription(`${role} role removed from ${rMember}`)
        .setFooter(`Role remove by ${message.author.username}`, aicon)
        .setTimestamp()

        await message.channel.send(embed)
        rMember.roles.remove(role.id)
  
}
  
exports.help = {
    name: "removerole",
    aliases: ["roleremove"],
    usage: "removerole <person>"
}