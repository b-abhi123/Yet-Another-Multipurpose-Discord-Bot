const { MessageEmbed } = require("discord.js");
const eco = require('discord-economy')
const fs = require('fs');
exports.execute = async (client, message, args) => {
  let tips = [
    `${client.prefix}server for our community!`,
    `Confused on how to get currency? Do ${client.prefix}howtoplay for info!`,
    `Interested in being the top player? Join our community where giveaways and events are held! ${client.prefix}`,
    `noice`
  ]
 let tipsR = tips[Math.floor(Math.random() * tips.length)];  


  let user = message.mentions.users.first()
  
  if (!user){
    const output = await eco.FetchBalance(message.author.id)
    const display = output.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (output.balance == null) return message.lineReply('You dont even have half a coin. Collect more using economy commands or gamble your coins!')
     let diamonds = JSON.parse(fs.readFileSync("./diemonds.json", "utf8"))
    if (!diamonds[message.author.id]){
      diamonds[message.author.id] = {
        status: '0'
      }
    }
    const diemonds = diamonds[message.author.id].status;

       fs.writeFile("./diemonds.json", JSON.stringify(diamonds), (err) => {
        if (err) console.log(err)
      })

     let emerolds = JSON.parse(fs.readFileSync("./emerolds.json", "utf8"))
    if (!emerolds[message.author.id]){
      emerolds[message.author.id] = {
        status: '0'
      }
    }
    const emerold = emerolds[message.author.id].status;

       fs.writeFile("./emerolds.json", JSON.stringify(emerolds), (err) => {
        if (err) console.log(err)
      })
     const Rich = new MessageEmbed()
      .setColor('GREEN')
      .setTitle(`${message.author.username}'s Bank Balance`)
      .setURL('https://discord.gg/GDPSejF9td')
      .setDescription(`<:roobies:881789848032280667> You have ${display} Roobies!\n <:diemonds:881790884465741845> You have ${diemonds} Diemonds!\n <:emerolds:881791175575621642> You have ${emerold} emerolds!`)
      .setThumbnail(message.author.displayAvatarURL())
      .setFooter(tipsR)
      message.lineReply(Rich)
  };
  
  
  if (user){
      const output = await eco.FetchBalance(user.id)
    const display = output.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (output.balance == null) return message.lineReply('They dont even own half a coin lmaoo')
     let diamonds = JSON.parse(fs.readFileSync("./diemonds.json", "utf8"))
    if (!diamonds[user.id]){
      diamonds[user.id] = {
        status: '0'
      }
    }
    const diemonds = diamonds[user.id].status;

       fs.writeFile("./diemonds.json", JSON.stringify(diamonds), (err) => {
        if (err) console.log(err)
      })

     let emerolds = JSON.parse(fs.readFileSync("./emerolds.json", "utf8"))
    if (!emerolds[user.id]){
      emerolds[user.id] = {
        status: '0'
      }
    }
    const emerold = emerolds[user.id].status;

       fs.writeFile("./emerolds.json", JSON.stringify(emerolds), (err) => {
        if (err) console.log(err)
      })
     const Rich = new MessageEmbed()
      .setColor('GREEN')
      .setTitle(`${user.username}'s Bank Balance`)
      .setURL('https://discord.gg/GDPSejF9td')
      .setDescription(`<:roobies:881789848032280667> They have ${display} Roobies!\n <:diemonds:881790884465741845> They have ${diemonds} Diemonds!\n <:emerolds:881791175575621642> They have ${emerold} Emerolds!`)
      .setThumbnail(user.displayAvatarURL())
      .setFooter(tipsR)
      message.lineReply(Rich)
    }
 }
  
  
exports.help = {
    name: "bal",
    aliases: ["balance"],
    usage: "bal"
}