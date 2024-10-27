const Discord = require("discord.js");
const fs = require('fs');
exports.execute = async (client, message, args) => {
  let lootboxes = JSON.parse(fs.readFileSync("./lootboxes.json", "utf8"))
    if (!lootboxes[message.author.id]){
      lootboxes[message.author.id] = {
        status: '0'
      }
    }
    const lootbox = lootboxes[message.author.id].status;
    
       fs.writeFile("./lootboxes.json", JSON.stringify(lootboxes), (err) => {
        if (err) console.log(err)
      })

 const umbed = new Discord.MessageEmbed()
 .setTitle('Your lootboxes!')
 .setDescription(`You own **${lootbox}** lootboxes <:lootbox:881817371000569917>\n \n How do I get lootboxes?\n Currently they are available from **rare** occurences in normal commands along with direct top.gg voting! The loots obtainable are a secret :eyes:`)
 message.channel.send(umbed)
}

  
exports.help = {
    name: "lootboxhelp",
    aliases: ["lootboxes"],
    usage: "lootboxhelp"
}