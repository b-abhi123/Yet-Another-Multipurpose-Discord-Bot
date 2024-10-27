const Discord = require('discord.js');

exports.execute = (client, message, args) => {
    let nsfwV = message.channel.nsfw ? 'Yes' : 'No';
    let parentV = message.channel.parent ? message.channel.parent : 'No parent category';
    let topicV = message.channel.topic ? message.channel.topic : 'There is no topic for this channel.';
    let embed = new Discord.MessageEmbed()
        .setTitle('Channel: ' + message.channel.name)
        .setDescription('Topic: ' + topicV)
        .addField('NSFW?', nsfwV, true)
        .addField("Category: ", parentV, true)
        .addField('Position: ', message.channel.position + 1, true)
        .setColor("RANDOM");

    message.lineReply(embed);
}

exports.help = {
    name: "channelinfo",
    aliases: ["infochannel","chaninfo"],
    usage: "channelinfo"
}