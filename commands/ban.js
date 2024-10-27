const Discord = require("discord.js");

exports.execute = async (client, message, [mention, ...reason]) => {

	if (!message.member.hasPermission("BAN_MEMBERS"))
		return message.reply("You cannot use this command.");
	if (message.mentions.members.size === 0)
		return message.reply("hmm, we're missing something- YES you need to mention a user!!");
	if (!message.guild.me.hasPermission("BAN_MEMBERS"))
		return message.reply("can you check the perms first? I cannot ban users.");
	if (message.mentions.members.first().hasPermission("ADMINISTRATOR"))
		return message.reply("eh, I cannot ban an admin wym");

	const banMember = message.mentions.members.first();

	const embed = new Discord.MessageEmbed()
		.setTitle("Banned from server")
		.setDescription(banMember.guild)
		.setThumbnail(banMember.guild.iconURL)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(`Banned by ${message.author.username}`);

	message.channel.send('Are you sure you want to ban this user?\nreply with "yes" or "no" in the next 10 seconds');

	await message.channel.awaitMessages(msg => msg.content.toLowerCase() == "yes" || msg.content.toLowerCase() == "no",
		{
			maxMatches: 1,
			max: 1,
			time: 10000,
			errors: ['time']
		})
		.then(msg1 => {
			if (msg1.first().author != message.author) { message.channel.send("only user who requested the ban can accept or decline") } else {
				if (msg1.first().content.toLowerCase() == "yes") {
					setTimeout(() => banMember.ban().then(member => {
						message.reply(`${member.user.username} was succesfully banned.`);
					}), 2000);
					if (banMember.bannable) {
						if (reason != "") {
							embed.addField("Reason for ban", `${reason.join(" ")}`);
							banMember.send(embed);
						}
						else {
							embed.addField("Reason for ban", "No reason was specified");
							banMember.send(embed);
						}
					} else {
						message.channel.send(`Failed to ban member ${banMember}`);
					}
				} else if (msg1.first().content.toLowerCase() == "no") {
					message.channel.send("Banning aborted");
				}
			}
		})
		.catch(() => message.channel.send("time is up, i've got a lot of jobs left to do smh"));
}

exports.help = {
  name: "ban",
  aliases: [],
  usage: "ban"
};