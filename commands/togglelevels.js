
const Discord = require('discord.js');
const fs = require('fs');
exports.execute = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Command restricted to server administrators!')

    let toggles = JSON.parse(fs.readFileSync("./levelenabled.json", "utf8"))
    if (!toggles[message.guild.id]){
      toggles[message.guild.id] = {
        status: 'Disabled'
      }
    }
    const me = toggles[message.guild.id].status;
    
    if(me === 'Disabled'){
      message.channel.send(`The levels property was disabled, but now its enabled. Users will have a ranking system and the ability to level up.`)
      
      toggles[message.guild.id] = {
        status: 'Enabled'
      }
       fs.writeFile("./levelenabled.json", JSON.stringify(toggles), (err) => {
        if (err) console.log(err)
      })

 
    } else if (me === 'Enabled') {
      message.channel.send('Successfully disabled the levels property.')

      
      toggles[message.guild.id] = {
        status: 'Disabled'
      }
       fs.writeFile("./levelenabled.json", JSON.stringify(toggles), (err) => {
        if (err) console.log(err)
      })
    }

     


}
  
exports.help = {
    name: "togglelevels",
    aliases: [],
    usage: "togglelevels"
}