const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    
    var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    
    const embed = new MessageEmbed()
      .setTitle("Statistics for Bunny Girl Senpai#2743")
      .setColor("RANDOM")
      .setDescription("This bot has been built by Mai~chael#1111")
      .addField("SERVERS", client.guilds.cache.size, true)
      .addField("ID", client.user.id, true)
      .addField("CHANNELS", client.channels.cache.size, true)
      .addField("PRESENCE", client.user.presence.activities[0].name, true)
      .addField("UPTIME","Running for** " + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "." + milliseconds + "** seconds!")
      .addField("STATUS", client.user.presence.status, true)
      .addField("RAM", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
      .addField("TOTAL MEMBERS", client.users.cache.size)
    return message.channel.send(embed)
    
};
  
exports.help = {
    name: "stats",
    aliases: ["statistics"],
    usage: "stats"
}