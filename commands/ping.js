const { MessageEmbed } = require("discord.js");


exports.execute = (client, message, args) => {
    let gatewayLatency = Math.floor(client.ws.ping);
    message.channel.send("Wait bro im coming to your house...").then(m => {
        const trip = Math.floor(m.createdTimestamp - message.createdTimestamp);

        const embed = new MessageEmbed()
            .setTitle("Ok hi im under your bed")
            .addField("API Latency", `${gatewayLatency}ms`, true)
            .addField("Client Latency", `${trip}ms`, true)
            .setColor("#7289DA")
            .setTimestamp();
        m.edit(embed);

    });
}

exports.help = {
    name: "ping",
    aliases: ["pong", "latency"],
    usage: `ping`
}
