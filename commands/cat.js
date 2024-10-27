const superagent = require("snekfetch");
const Discord = require('discord.js')


exports.execute = async (client, message, args) => {
    superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Your cat is here!")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`who doesnt love cats :)`)
  .setURL(response.body.url);
message.lineReply(lewdembed);
})
}
  
exports.help = {
    name: "cat",
    aliases: ["kat"],
    usage: "cat"
}