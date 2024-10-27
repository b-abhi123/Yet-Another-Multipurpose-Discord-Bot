const fs = require('fs');
const client = global.client;
const Prizes = require("../models/Prizes.js");
const Levels = require("../models/Levels.js");
const fetch = require('node-fetch')


module.exports = async (client, message) => {
  

   let chats = JSON.parse(fs.readFileSync("./chatchannels.json", "utf8"))
    if (!chats[message.guild.id]){
      chats[message.guild.id] = {
        status: 'NA'
      }
    }

    const chatid = chats[message.guild.id].status;
    
    if (message.author.bot) return;

    if (message.channel.id === chatid) {
      message.lineReply(`This system is now deprecated. To do some proper **VOICE** chatting, please invite Eromin at: https://www.dsc.gg/eromin OR http://www.eromin.ga/\nYou are welcome to delete this channel if you don't need any future services!`)
    }

       let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
    if (!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: "b!"
      }
    }
    client.prefix = prefixes[message.guild.id].prefixes.toLowerCase();
    //client.prefix = "b!";
     let toggles = JSON.parse(fs.readFileSync("./levelenabled.json", "utf8"))
    if (!toggles[message.guild.id]){
      toggles[message.guild.id] = {
        status: 'Disabled'
      }
    }
    const me = toggles[message.guild.id].status;
    
    if (message.author.bot) return;
    if (message.content.includes(client.user.id)) {
      message.reply(`hey dude, my prefix here is ${client.prefix}`)
    }
    if (message.channel.type === "dm") return;
    if (!message.guild || message.author.bot) return;
      
      if (!message.content.startsWith(client.prefix)) return;
      let args = message.content.slice(client.prefix.length).trim().split(" ");
      let commandName = args.shift().toLowerCase();
      let command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));
      if (!command) return;
      if (message.channel.id === chatid) return;
     
      command.execute(client, message, args);

client.channels.cache.get(`876004697104842813`).send(`${message.author.username} just ran the ${commandName} command in ${message.guild.name} and in ${message.channel.name} with args ${args.join(" ")}!`)  

let guildintents = JSON.parse(fs.readFileSync("./sentserver.json", "utf-8"))
if(!guildintents[message.guild.id]){
  guildintents[message.guild.id] = {
    status: "NotSent"
}

const deprecations = guildintents[message.guild.id].status

if(deprecations === "Sent") return;
message.channel.send(`**NOTIFICATION**\nI have ended my service as of 23rd September 2021.\n \nThis does not mean I won't function! I will just be having the same features as of then.\nReasons include me working on a new bot. I wanted to make something different on discord since early times. I have now gotten the best one, and I would love it if you invite my new project and help it grow!\nLearn more about me at ${client.prefix}discontinuedinfo\n \nThe link is available here:\n https://discord.com/api/oauth2/authorize?client_id=855708674630615041&permissions=534789880640&scope=bot`)
  guildintents[message.guild.id] = {
      status: "Sent"
    }
       fs.writeFile("./sentserver.json", JSON.stringify(guildintents), (err) => {
        if (err) console.log(err)
      })
}


      
   if(me === "Enabled"){
    let levelData = await Levels.findOne({ guildId: message.guild.id, userId: message.author.id });
    let rankData = await Prizes.findOne({ guildId: message.guild.id});
    
    if (!rankData) {
        let newRank = new Prizes({
            guildId: message.guild.id
        }).save();
    };
  
    if (!levelData) {
        let newLevel = new Levels({
            guildId: message.guild.id,
            userId: message.author.id
        }).save();
    } else {
        let addedXp = Math.floor((Math.random() * 10) + 1);
        levelData.xp += addedXp
        levelData.totalXp += addedXp
        levelData.save().then(data => {
            if(data.xp >= data.xpToLevel) {
                let channels = JSON.parse(fs.readFileSync("./levelupchannel.json", "utf8"))
                if (!channels[message.guild.id]){
                  channels[message.guild.id] = {
                    status: 'None'
                  }
                }
                const channel = channels[message.guild.id].status;

                levelData.xp = 0;
                levelData.level++;
                levelData.xpToLevel = data.level * 123;
                levelData.save().then(async _data => {
                   if(rankData && rankData.levelPrizes.find(x => x.level == _data.level)) {
                        rankData.levelPrizes.filter(x => x.level == _data.level).forEach(x => {
                            message.member.roles.add(x.role).catch(e => { });
                        });
                    };

                  if(channel === 'None'){
                    message.reply(`GG! You just advanced to Level **${_data.level}!** :tada:`);
                  } else {
                    const spec = client.channels.cache.get(channel)
                    if(!spec){
                     message.reply(`GG! You just advanced to Level **${_data.level}!** :tada:`);
                    } else {
                      client.channels.cache.get(channel).send(`GG ${message.author}! You just advanced to Level **${_data.level}!** :tada:`)
                    }
                  }
                 
                     
              
                    
                   
                });
            };
        });
    };
   }



  

};
