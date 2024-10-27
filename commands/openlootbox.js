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

  if (lootbox === '0') return message.channel.send(`You have 0 lootboxes. Collect more using commands or directly vote to get some! [${client.prefix}vote]`)

  const leftlootboxes = (parseInt(lootbox) - 1).toString()


  lootboxes[message.author.id] = {
    status: leftlootboxes
  }

    fs.writeFile("./lootboxes.json", JSON.stringify(lootboxes), (err) => {
        if (err) console.log(err)
      })

    
    //////GIVE EM EMEROLDS////
    const amountpog = Math.floor((Math.random() * 1000) + 100);
    let wond2 = JSON.parse(fs.readFileSync("./emerolds.json", "utf8"))
    if (!wond2[message.author.id]){
      wond2[message.author.id] = {
        status: '0'
      }
    }

    const amounte = wond2[message.author.id].status;
    const wone = (parseInt(amounte) + amountpog).toString()
    wond2[message.author.id] = {
      status: wone
    }
    
       fs.writeFile("./emerolds.json", JSON.stringify(wond2), (err) => {
        if (err) console.log(err)
      })
    /////END OF GIVING EMEROLDS////

    //////GIVE EM DIEMONDS////
    const amountd = Math.floor((Math.random() * 5000) + 100);
    let wond1 = JSON.parse(fs.readFileSync("./diemonds.json", "utf8"))
    if (!wond1[message.author.id]){
      wond1[message.author.id] = {
        status: '0'
      }
    }

    const amounth = wond1[message.author.id].status;
    const won = (parseInt(amounth) + amountd).toString()
    wond1[message.author.id] = {
      status: won
    }
    
       fs.writeFile("./diemonds.json", JSON.stringify(wond1), (err) => {
        if (err) console.log(err)
      })
    /////END OF GIVING DIAMONDS////
    
    const amountr = Math.floor((Math.random() * 10000) + 1000);
    const eco = require('discord-economy')
    eco.AddToBalance(message.author.id, amountr)

    
    message.channel.send("<:lootbox:881817371000569917> Opening Lootbox...").then(m => {
      
      m.edit(`<:lootbox:881817371000569917> Almost open!\n I see <:roobies:881789848032280667> ${amountr} Roobies!`)
      m.edit(`<:lootbox:881817371000569917> Lootbox Unboxed!\n \n You got <:roobies:881789848032280667> ${amountr} Roobies!\n And, <:diemonds:881790884465741845> ${amountd} Diemonds!\n And, <:emerolds:881791175575621642> ${amountpog} Emerolds!`)
      
    });



 }


  
exports.help = {
    name: "openlootbox",
    aliases: ["lootbox"],
    usage: "openlootbox"
}