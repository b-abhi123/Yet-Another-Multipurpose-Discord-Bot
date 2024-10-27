const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
      const review = args.join(" ");

    if (!review) return message.channel.send("Please provide a review");

    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username} has given a review`)
      .setDescription(review)
      .setFooter(message.author.username)
      .setTimestamp();

    client.channels.cache.get('849970448291725332').send(embed);
    message.channel.send("Thanks for your review!");
};

exports.help = {
  name: "review",
  aliases: [],
  usage: "review"
};
