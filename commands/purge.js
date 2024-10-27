exports.execute = (client, message, args, tools) => {
    let userinp = parseInt(args[0], 10);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You are not allowed to use this command.');

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply('sorry i dont have perms');

    if (isNaN(userinp)) return message.reply("Please supply a number of messages to delete.");

    if (userinp > 50 || userinp < 2) return message.reply('Please supply a number between 2 and 50 to delete.');

    message.channel.bulkDelete(userinp + 1).then(messages => console.log(`Bulk deleted ${messages.size} messages`)).catch(console.error);
    message.channel.send(`Bulk deleted ${userinp + 1} messages.`)
}

exports.help = {
    name: "purge",
    aliases: [],
    usage: "purge <amount>"
}