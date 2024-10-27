const { MessageEmbed } = require('discord.js');


exports.execute = async (client, message, args) => {
  const howto = new MessageEmbed()
  .setTitle('How to play the BGS Currency.')
  .setDescription(`**BGS features a very easy to manage and play currency type of game. There are 3 types of currency currently present. They are listed as:**\n \n<:roobies:881789848032280667> ----> These red colored gems are **Roobies**. They are the main currency of this bot. They are pretty common around, a noob keeps dropping some smh [${client.prefix}economyhelp]\n Oh yeah also, my casino only accepts Roobies as a method of gaining, you need to find the trader when he comes to your city in certain intervals for Roobie Trade :] [${client.prefix}trader]\n \n <:diemonds:881790884465741845> -----> These blue colored gems are **Diemonds**. They serve a purpose to the trader [no idea why] and he keeps trading his Diemonds from another country for your Roobies. Be aware when he comes so you can stack up on Diemonds!\nThese are mainly used in the retail shop because apparently its the trader's friend's mom's uncle's son's daughter's grandfather's friend's retail shop tch tch.\n \n <:emerolds:881791175575621642> ----> These green colored gems are also called support gems, or **Emerolds**! They are currently obtainable for voting every 12 hours, and available to trade for certain CUSTOM and COOL commands, as well as LOOTBOXES! [${client.prefix}vote]\nYa, also its pretty random about what you get in lootboxes! [${client.prefix}lootboxhelp] \n \n \n Well, thats all written on my guide, hope it was helpful! Enjoy in the city of bunny girls!`)

  message.channel.send(howto)
}
  
exports.help = {
    name: "howtoplay",
    aliases: [],
    usage: "howtoplay"
}