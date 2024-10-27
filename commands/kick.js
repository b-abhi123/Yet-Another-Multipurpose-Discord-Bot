const Discord = require("discord.js");

exports.execute = async (client, message, [mention, ...reason]) => {

	if (!message.member.hasPermission("KICK_MEMBERS"))
		return message.reply("You can't use this command.");
	if (message.mentions.members.size === 0)
		return message.reply("At least mention a user that you want to kick-");
	if (!message.guild.me.hasPermission("KICK_MEMBERS"))
		return message.reply("um, at least give me permissions first :/");
	if (message.mentions.members.first().hasPermission("ADMINISTRATOR"))
		return message.reply("Sorry man, I cannot kick someone who's an Admin.");

	const kickMember = message.mentions.members.first();

	const embed = new Discord.MessageEmbed()
		.setTitle("Kicked from server")
		.setDescription(kickMember.guild)
		.setThumbnail(kickMember.guild.iconURL)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(`Kicked by ${message.author.username}`);

	message.channel.send('Are you sure you want to kick this user?\nreply with "yes" or "no" in the next 10 seconds');

	// let good = ['yes', 'no']

	const collector = message.channel.createMessageCollector(msg => msg.author.id === message.author.id, { time: 10000 })

	collector.on("collect", async (x) => {

			if (x.content == "yes") {
				setTimeout(() => kickMember.kick().then(member => {
					message.reply(`${member.user.username} was succesfully kicked.`);
				}), 2000)
				if (kickMember.kickable) {
					if (reason != "") {
						collector.stop()
						embed.addField("Reason for kick", `${reason.join(" ")}`);
						return kickMember.send(embed);
					}
					else {
						collector.stop()
						embed.addField("Reason for kick", "No reason was specified");
						return kickMember.send(embed);
					}
				} else {
					collector.stop()
					return message.channel.send(`Failed to kick member ${kickMember}`);
				}
			} else if (x.content == "no") {
				collector.stop()
				return message.channel.send("Kicking aborted");
			} else {
				message.channel.send('Invalid input')
			}
		})

		collector.on("end", (x, reason) => {
			if(reason === 'time') {
				message.channel.send('Aborting kick.')
			}
		})
}

exports.help = {
  name: "kick",
  aliases: [],
  usage: "kick <@user>"
}