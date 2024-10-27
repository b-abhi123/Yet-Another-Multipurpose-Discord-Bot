const Discord = require("discord.js");

exports.execute = (client, message) => {
    let embed = new Discord.MessageEmbed()
        .setTitle(`Changelog 0.0.1`)
        .setDescription("HUGE UPDATE! Economy, music, levels and AI category drop by!")
        .addField("Previous Changelogs", "For all changelogs, join my [support server](https://discord.gg/a4krxwBVfz)")
        .setFooter("Last updated on 22nd August, 2021")
        .setColor("RANDOM");

    message.lineReply(embed);
}

exports.help = {
    name: "changelog",
    aliases: ["updates"],
    usage: "changelog"
}