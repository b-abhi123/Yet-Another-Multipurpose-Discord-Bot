const Discord = require("discord.js");

exports.execute = async (client, message, args) => {
    
  const notice3 = new Discord.MessageEmbed()
		.setDescription(
			"**Failed to set slowmode in this channel, check your slowmode number!**"
		)
		.setColor("RED")
    .setFooter("Did you know the limit is 21600 seconds?");

	const notice1 = new Discord.MessageEmbed()
		.setDescription(
			"**Failed to set slowmode in this channel, please enter a valid number!**"
		)
		.setColor("RED")
    .setFooter("Did you know the limit is 21600 seconds?");

	const noticwsse1 = new Discord.MessageEmbed()
		.setDescription(
			"**Failed to set slowmode in this channel, you can only type a value between 0 - 21600 seconds!**"
		)
		.setColor("RED");

	const notice22 = new Discord.MessageEmbed()
		.setDescription(
			"**I don't have permission to change channel slowmode!**"
		)
		.setColor("RED")
    .setFooter("Did you know the limit is 21600 seconds?");
	if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) {
		return message.channel
			.send(notice3)
			.then(msg => msg.delete({ timeout: 5000 }));
	}
	const duration = parseInt(args[0]);
	const mmsssqembed = new Discord.MessageEmbed()
		.setDescription(
			`${message.author.username}, Missing Permission`
		)
		.setColor("#FFFF00")
    .setFooter("Did you know the limit is 21600 seconds?")
	if (!message.member.hasPermission("MANAGE_CHANNELS")) {
		return message.channel
			.send(mmsssqembed)
			.then(msg => msg.delete({ timeout: 5000 }));
	}
	if (isNaN(duration)) {
		return message.channel.send(notice1);
	}
	if (duration < 0 || duration > 21601) {
		return message.channel.send(noticwsse1);
	}
	message.channel.setRateLimitPerUser(duration).catch(() => {
		message.channel.send(notice3);
	});
	const bsuembed = new Discord.MessageEmbed()
		.setDescription(
			`Set channel's slowmode to **${duration}s.** `
		)
		.setColor("GREEN")
    .setFooter("Did you know the limit is 21600 seconds?");
	message.channel.send(bsuembed);
  
}
  
exports.help = {
    name: "slowmode",
    aliases: ["setslowmode","slowmo"],
    usage: "slowmode <time>"
}