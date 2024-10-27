const { MessageEmbed } = require("discord.js");
const eco = require('discord-economy')

exports.execute = async (client, message, args) => {    
     var output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.author.id
      })
      

      eco.Leaderboard({
        limit: 5, //Only takes top 3 ( Totally Optional )
        filter: x => x.balance > 0 //Only allows people with more than 100 balance ( Totally Optional )
      }).then(async users => { //make sure it is async
 
        if (users[0]) var firstplace = await client.users.cache.get(users[0].userid) //Searches for the user object in discord for first place
        if (users[1]) var secondplace = await client.users.cache.get(users[1].userid) //Searches for the user object in discord for second place
        if (users[2]) var thirdplace = await client.users.cache.get(users[2].userid) //Searches for the user object in discord for third place
        if (users[3]) var thirdplace = await client.users.cache.get(users[3].userid)
      
      var firstbal = users[0].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      var secbal = users[1].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      var thirdbal = users[2].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      var fourthbal = users[3].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      var fifthbal = users[4].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      var serverIcon = message.guild.iconURL();
      const emb = new MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Global Leaderboard!`)
      .setDescription(`**Personality is hidden to protect privacy and given by Unknown#0000**\n Looking for chat leaderboard? [${client.prefix}lbchat]\n Diamonds and Emerolds dont have a leaderboard because they dont belong to our country :)`)
      .setThumbnail(serverIcon)
      .addField(`1- Unknown#0000`, `${users[0] && firstbal || 'None'}`)
      .addField(`2- Unknown#0000`, `${users[1] && secbal || 'None'}`)  
      .addField(`3- Unknown#0000`, `${users[2] && thirdbal || 'None'}`) 
      .addField(`4- Unknown#0000`, `${users[3] && fourthbal || 'None'}`) 
      .addField(`5- Unknown#0000`, `${users[4] && fifthbal || 'None'}`)
      .setFooter(`You place #${output} globally!\nFun Fact: Every day we provide giveaways and events worth 1M+ in our server! [well soon ig]`)
      
      message.channel.send(emb)
      
    })
  }


  

  
exports.help = {
    name: "leaderboard",
    aliases: ["lb"],
    usage: "leaderboard"
}