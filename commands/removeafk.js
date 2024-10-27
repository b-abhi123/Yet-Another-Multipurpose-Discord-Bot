
 const { MessageEmbed } = require("discord.js");
const fs = require('fs')
exports.execute = async (client, message, args) => {


   let pog = JSON.parse(fs.readFileSync("./afk.json", "utf8"))
    if (!pog[message.author.id]) return;
    if(pog[message.author.id].status === 'NotAFK') return message.lineReply('You dont even have ')
    message.lineReply(`Welcome back from "${pog[message.author.id].status}", I removed your afk!`)

pog[message.author.id] = {
      status: 'NotAFK'
    }
       fs.writeFile("./afk.json", JSON.stringify(pog), (err) => {
        if (err) console.log(err)
      })
  const nick = message.member.nickname.substring(6)
 message.member.setNickname(`${nick}`).catch(error => message.channel.send("I couldnt update your nickname though!"));

    
}
  
exports.help = {
    name: "removeafk",
    aliases: ["removeafk"],
    usage: "removeafk"
}