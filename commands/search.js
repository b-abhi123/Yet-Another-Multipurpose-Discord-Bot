const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const eco = require('discord-economy');
const talkedRecently = new Set();
const fs = require('fs');
exports.execute = async (client, message, args) => {
 	
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("bro money is valuable and im not a tree of it, wait 15s per search. And while you wait you can prolly try to gamble in my casino [b!economyhelp]");
    } else {
        let pokes = ['Nest', 'Town', 'Bank', 'Wallet', 'Toilet', 'Sewer', 'Brain','Shoes','Clothes','Mars','Sun','Mud'];
         
       let searchR = pokes[Math.floor(Math.random() * pokes.length)];

      let amount = Math.floor((Math.random() * 750) + 1)
      const extrachance = Math.floor((Math.random() * 20) + 1)
      console.log(extrachance)
      if (extrachance === 2){
        amount = Math.floor((Math.random() * 1000) + 1)
        const won2 =  new MessageEmbed()
      .setColor('GREEN')
      .setTitle('Well searched!!')
      .setDescription(`You successfully obtained **${amount} Roobies** from good searching to **${searchR}** \n**Bruh ${searchR} had a noob putting a multi behind!!! [+1000 chance]**\n \nYou didnt get any objects tho tch tch\n \nDARN people kept their gems in their safes [oh i guess this is a word]-\n +0 Emerolds, +0 Diemonds :]`)
      .setFooter('b!invite to invite me to your server')
      .setTimestamp()
      .setThumbnail('https://www.kindpng.com/picc/m/27-271417_person-clipart-futuristic-searching-clip-art-hd-png.png')
      message.lineReply(won2);
      eco.AddToBalance(message.author.id, parseInt(amount));
      talkedRecently.add(message.author.id);
      } 
      else if (extrachance === 6){
        const fee = Math.floor((Math.random() * -10000) + -1000)
        const lost =  new MessageEmbed()
      .setColor('RED')
      .setTitle('Bad searching skills, train more!! The COPS found you stealing bruh')
      .setDescription(`You got arrested in **${searchR}** because you got cash hungry and tried stealing!\n \nYou didnt get any objects tho tch tch [obviously]\n \nWell, people are getting aware of their money at least nowadays sed-\n +0 Emerolds, +0 Diemonds :] oh yea and +0 Roobies with a sore bum lmaoo\n \nYou're lucky you didnt die, the doctor says...[${fee} Roobies was taken as fee ;-;]`)
      .setFooter('b!invite to invite me to your server')
      .setTimestamp()
      .setThumbnail('https://www.kindpng.com/picc/m/27-271417_person-clipart-futuristic-searching-clip-art-hd-png.png')
      message.lineReply(lost);
      talkedRecently.add(message.author.id);
       const bal = eco.FetchBalance(message.author.id)
      if(fee > bal) return;
     
      eco.AddToBalance(message.author.id, parseInt(fee));
      } else if (extrachance === 9){
        const lootboxamount = Math.floor((Math.random() * 10) + 1)
      const god =  new MessageEmbed()
      .setColor('BLUE')
      .setTitle('God found you!! rare occurence i guess')
      .setDescription(`Someone dropped a phone...you stole it and found GOD's number?!! You called him obviously...\n \n**GOD:** I trade in lootboxes, so I will give you ${lootboxamount} lootboxes for a startup son!-\n \n +0 Emerolds, +0 Diemonds :] oh yea btw he says he will charge you whatever 10% you earn from the box :trol: [yeah god is greedy ngl]\n \nThe doc thinks you're mad but hey, the lootboxes are good :) [${client.prefix}lootboxhelp]`)
      .setFooter('b!invite to invite me to your server')
      .setTimestamp()
      .setThumbnail('https://www.kindpng.com/picc/m/27-271417_person-clipart-futuristic-searching-clip-art-hd-png.png')
      let lootboxes = JSON.parse(fs.readFileSync("./lootboxes.json", "utf8"))
    if (!lootboxes[message.author.id]){
      lootboxes[message.author.id] = {
        status: '0'
      }
    }
    const lootbox = lootboxes[message.author.id].status;

    lootboxes[message.author.id] = {
      status: (parseInt(lootbox) + lootboxamount).toString()
    }
    
       fs.writeFile("./lootboxes.json", JSON.stringify(lootboxes), (err) => {
        if (err) console.log(err)
      })

      message.lineReply(god)
      talkedRecently.add(message.author.id);
      }
      else {
      const won =  new MessageEmbed()
      .setColor('GREEN')
      .setTitle('Nice searching skills ig')
      .setDescription(`You successfully obtained **${amount}** Roobies from searching in **${searchR}!**\n \nYou didnt find any objects tho tch tch [perfection comes with practice says mom]\nNo bonuses as well noice\n \nPeople dont drop gems dumdum-\n **+0 Emerolds, +0 Diemonds :]**`)
      .setFooter('b!invite to invite me to your server')
      .setTimestamp()
      .setThumbnail('https://www.kindpng.com/picc/m/27-271417_person-clipart-futuristic-searching-clip-art-hd-png.png')
      message.lineReply(won);
      eco.AddToBalance(message.author.id, parseInt(amount));
      
      talkedRecently.add(message.author.id);
      }

      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 1000);
    }
    

  
}
  
exports.help = {
    name: "search",
    aliases: ["look"],
    usage: "search"
}