  const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Lol you need to have the manage roles perms to add roles to particular users.");
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.lineReply("You haven't given me the Manage Roles perms, so I cannot add roles to users :]");
        
        if (!args[0]) return message.lineReply(`At least enter a role lol. The syntax is ${client.prefix}addrole <user> <role>/<roleid>`)

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.lineReply(`Give me a user too >:( The syntax is ${client.prefix}addrole <user> <role>/<roleid>`);
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.lineReply('Eh, i cant give this role-')

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.lineReply("Uhm, either add a role id or ping a role :/")

        if (!role) return message.lineReply("I can't find that role-")

        if (role.managed) return message.lineReply("Bruh I cannot add that role-")
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.lineReply('This role is higher than me. Please configure the role hierarchy.')

        if (rMember.roles.cache.has(role.id)) return message.lineReply("man why would i add this role to that user if they already have the role-")
        if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
        
  
        message.lineReply(`"${role.name}" role added to ${rMember} by ${message.author.username}`)


}
  
exports.help = {
    name: "addrole",
    aliases: ["roleadd"],
    usage: "addrole <person>"
}