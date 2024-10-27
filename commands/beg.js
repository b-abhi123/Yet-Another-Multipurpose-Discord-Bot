const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const eco = require('discord-economy');
const talkedRecently = new Set();
const fs = require('fs')
exports.execute = async (client, message, args) => {
 	
    if (talkedRecently.has(message.author.id)) {
            message.lineReply("stop being a crybaby for Roobies, wait 10s for every beg you do. While you wait you can prolly try to gamble some into my casino [b!economyhelp]");
    } else {
        let pokes = ['Michael','Penguins','Your Mom','Daddy','Obama','Biden','Bill Gates','Poop [is this even possible?]','Your Cat','My Dog','My Mom','Ninja','Shroud','I'];
       let searchR = pokes[Math.floor(Math.random() * pokes.length)];

      let amount = Math.floor((Math.random() * 750) + 1)
      const extrachance = Math.floor((Math.random() * 20) + 1)
      console.log(extrachance)
      if (extrachance === 2){
        amount = Math.floor((Math.random() * 1000) + 1)
        const won2 =  new MessageEmbed()
      .setColor('GREEN')
      .setTitle('Nice begging skills.')
      .setDescription(`You successfully obtained **${amount} Roobies** from begging.\n **${searchR}** was kind enough, hopefully.\n**Since ${searchR} got supa rich, they also provided you an extra chance of getting roobies! [+1000 chance]**\n \nYou didnt get any objects tho tch tch\n \nWell, no one is generous enough to provide gems to beggars-\n +0 Emerolds, +0 Diemonds :]`)
      .setFooter('b!invite to invite me to your server')
      .setTimestamp()
      .setThumbnail('https://t3.ftcdn.net/jpg/01/68/94/58/360_F_168945817_EZAzYQpZojQtzYRT7vFrBuN7221T1Wu5.jpg')
      message.lineReply(won2);
      eco.AddToBalance(message.author.id, parseInt(amount));
      talkedRecently.add(message.author.id);
      } 
      else if (extrachance === 6){
        const fee = Math.floor((Math.random() * -10000) + -1000)
        const lost =  new MessageEmbed()
      .setColor('RED')
      .setTitle('Bad begging skills, train more!!')
      .setDescription(`You got kicked from the street for begging by **${searchR}**!\n \nYou didnt get any objects tho tch tch [obviously]\n \nWell, no one is generous enough nowadays sed-\n +0 Emerolds, +0 Diemonds :] oh yea and +0 Roobies with a sore bum lmaoo\n \nYou're lucky you didnt die, the doctor says...[${fee} Roobies was taken as fee ;-;]`)
      .setFooter('b!invite to invite me to your server')
      .setTimestamp()
      .setThumbnail('https://t3.ftcdn.net/jpg/01/68/94/58/360_F_168945817_EZAzYQpZojQtzYRT7vFrBuN7221T1Wu5.jpg')
      message.lineReply(lost);
      const bal = eco.FetchBalance(message.author.id)
      talkedRecently.add(message.author.id);
      if (fee > bal) return message.channel.send(`You were kicked to death for having ${bal} Roobies which were less than the fee - ${fee}...RIP! Hopefully your money stayed tight!! GG!`);
      eco.AddToBalance(message.author.id, parseInt(fee));
      } else if (extrachance === 9){
        const lootboxamount = Math.floor((Math.random() * 10) + 1)
      const god =  new MessageEmbed()
      .setColor('BLUE')
      .setTitle('God found you!! rare occurence i guess')
      .setDescription(`Wow, such a great generous human being sighted your so calld "struggles" and called- GOD?!\n \nGod trades in lootboxes, so he gave you ${lootboxamount} lootboxes-\n \n +0 Emerolds, +0 Diemonds :] oh yea btw he says he will charge you whatever 10% you earn from the box :trol: [yeah god is greedy ngl]\n \nThe doc thinks you're mad but hey, the lootboxes are good :) [${client.prefix}lootboxhelp]`)
      .setFooter('b!invite to invite me to your server')
      .setTimestamp()
      .setThumbnail('https://t3.ftcdn.net/jpg/01/68/94/58/360_F_168945817_EZAzYQpZojQtzYRT7vFrBuN7221T1Wu5.jpg')
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
      .setTitle('Nice begging skills.')
      .setDescription(`You successfully obtained ${amount} Roobies from begging.\n ${searchR} was kind enough, hopefully.\n \nYou didnt get any objects tho tch tch\nNo bonuses as well noice\n \nWell, no one is generous enough to provide gems to beggars-\n **+0 Emerolds, +0 Diemonds :]**`)
      .setFooter('b!invite to invite me to your server')
      .setTimestamp()
      .setThumbnail('https://t3.ftcdn.net/jpg/01/68/94/58/360_F_168945817_EZAzYQpZojQtzYRT7vFrBuN7221T1Wu5.jpg')
      message.lineReply(won);
      eco.AddToBalance(message.author.id, parseInt(amount));
      
      talkedRecently.add(message.author.id);
      }

      
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
    

  
}
  
exports.help = {
    name: "beg",
    aliases: ["begg"],
    usage: "beg"
}