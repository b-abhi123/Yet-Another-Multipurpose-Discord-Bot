const { MessageEmbed } = require("discord.js");
const fs = require('fs')
exports.execute = async (client, message, args) => {


   let chats = JSON.parse(fs.readFileSync("./afk.json", "utf8"))
    if (!chats[message.author.id]){
      chats[message.author.id] = {
        status: 'NotAFK'
      }
    }
    const channel = chats[message.author.id].status;

    const reason = args.join(" ") || 'AFK'
    
    message.lineReply(`I set your AFK to ${reason}`)

    chats[message.author.id] = {
      status: reason
    }
       fs.writeFile("./afk.json", JSON.stringify(chats), (err) => {
        if (err) console.log(err)
      })

    const nick = message.member.nickname || message.author.username
     message.member.setNickname(`[AFK] ${nick}`).catch(error => message.channel.send("I couldnt update your nickname though!"));
    
}
  
exports.help = {
    name: "afk",
    aliases: ["setafk"],
    usage: "afk"
}