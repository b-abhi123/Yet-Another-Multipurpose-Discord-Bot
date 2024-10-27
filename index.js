const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('https://discord.gg/ubRQdrayfQ'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);

const Discord = require('discord.js');
const Distube = require('distube');
require("discord-reply");
const client = new Discord.Client({ disableMentions: 'everyone' });
const db = require('quick.db');
const eco = require('discord-economy');

const moment = require('moment')
const Topgg = require('@top-gg/sdk')
const fetch = require('node-fetch')

const webhook = new Topgg.Webhook('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzNDYzMDkxNzg3OTYyNzgxNyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjMwMjE4OTc4fQ.m4tECrTBqk42uDqOjHu7Jbe6_ef0E35UOO9jacTP5PQ') 

app.post('', webhook.listener(vote => { //ending url

  console.log("User with id - " + vote.user + " Voted!")
     client.channels.cache.get('876004697104842813').send(`${vote.user} just voted for us, yay!`) 
   client.users.fetch(`${vote.user}`).then((user) => {
 user.send(`Hey there! Thanks for voting, we have also provided you with some rewards :)\n+10K Roobies <:roobies:881789848032280667>\n+1K Diemonds <:diemonds:881790884465741845>\n+100 Emerolds <:emerolds:881791175575621642>\nAnd, a LOOTBOX <:lootbox:881817371000569917>\n \nYou can vote me every 12 hours for these :3`);
 eco.AddToBalance(user.id, parseInt('10000'));

 let diamonds = JSON.parse(fs.readFileSync("./diemonds.json", "utf8"))
    if (!diamonds[user.id]){
      diamonds[user.id] = {
        status: '0'
      }
    }
    const diemonds = diamonds[user.id].status;

    diamonds[user.id] = {
      status: (parseInt(diemonds) + 1000).toString()
    }

       fs.writeFile("./diemonds.json", JSON.stringify(diamonds), (err) => {
        if (err) console.log(err)
      })


 let emeralds = JSON.parse(fs.readFileSync("./emerolds.json", "utf8"))
    if (!emeralds[user.id]){
      emeralds[user.id] = {
        status: '0'
      }
    }
    const emerolds = emeralds[user.id].status;

    emeralds[user.id] = {
      status: (parseInt(emerolds) + 100).toString()
    }

       fs.writeFile("./emerolds.json", JSON.stringify(emeralds), (err) => {
        if (err) console.log(err)
      })

  let lootboxes = JSON.parse(fs.readFileSync("./lootboxes.json", "utf8"))
    if (!lootboxes[user.id]){
      lootboxes[user.id] = {
        status: '0'
      }
    }
    const lootbox = lootboxes[user.id].status;

    lootboxes[user.id] = {
      status: (parseInt(lootbox) + 1).toString()
    }

       fs.writeFile("./lootboxes.json", JSON.stringify(lootboxes), (err) => {
        if (err) console.log(err)
      })


});
 
}))



console.log("Your app is ready to log votes :D")

const Constants = require('./node_modules/discord.js/src/util/Constants.js');
Constants.DefaultOptions.ws.properties.$browser = 'Discord iOS';

const mongoose = require('mongoose');

client.config = require('./botConfig');
client.distube = new Distube(client, {
	searchSongs: true,
	emitNewSongOnly: true,
	leaveOnFinish: true
});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const canvacord = require('canvacord')
const fs = require('fs');


client.on('ready', () => {
	client.users.fetch('619457552563961896').then(dm => {
		dm.send(`Hey Michael!`);
	});
	mongoose.connect(
		'mongodb+srv://Discord:maisakurajima@sphinx.pjqfj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	);
	console.log('MongoDB connected!');
  
});


client.on('guildCreate', guild => {
	let channelID;
	let channels = guild.channels.cache;

	channelLoop: for (let key in channels) {
		let c = channels[key];
		if (c[1].type === 'text') {
			channelID = c[0];
			break channelLoop;
		}
	}

	let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
	channel.send(
		`Thanks for inviting me into this server! Do b!help to get all my commands!`
	);
  client.channels.cache.get(`876004697104842813`).send(`I was invited to **${guild.name}**`)
});


client.on('guildDelete', guild => {
  client.channels.cache.get(`876004697104842813`).send(`I was kicked from **${guild.name}**!`)
});

client.on('guildMemberAdd', async member => {
   let chans = JSON.parse(fs.readFileSync("./welcomechannels.json", "utf8"))
    if (!chans[member.guild.id]){
      chans[member.guild.id] = {
        status: 'NA'
      }
    }
    const dachannel = chans[member.guild.id].status;

  const flags = {
    DISCORD_EMPLOYEE: '<:staff:850632050837815306>',
    DISCORD_PARTNER: '<:Partner:850632296826011669>',
    BUGHUNTER_LEVEL_1: '<:bughunter:850632644906975242>',
    BUGHUNTER_LEVEL_2: '<:bughunter2:850632924876767293>',
    HYPESQUAD_EVENTS: '<:hypesquadevents:850633179081867275>',
    HOUSE_BRAVERY: '<:hypesquadbrave:850633448065728582>',
    HOUSE_BRILLIANCE: '<:hypesquadbrilliant:850633665699512330>',
    HOUSE_BALANCE: '<:hypebalance:850633863599751198>',
    EARLY_SUPPORTER: '<:earlysupporterack:850634167292788746>',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: '<:db_verified_blurple:847130788376870943>',
    VERIFIED_DEVELOPER: '<:verifiedDevBadge:744342594271838289>'
};


  let mssgs = JSON.parse(fs.readFileSync("./welcomemessage.json", "utf8"))
    if (!mssgs[member.guild.id]){
      mssgs[member.guild.id] = {
        status: 'Welcome to **${member.guild.name}**, **${member}**, we hope you enjoy your stay here!'
      }
    }
      const Canvas = require('discord-canvas');
   

    const image = await new Canvas.Welcome()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount)
  .setGuildName(member.guild.name)
  
  .setColor("border")
  .setColor("username-box")
  .setColor("discriminator-box")
  .setColor("message-box")
  .setColor("title", "#FFFFFF")
  .setColor("avatar", "#FFFFFF")
  .setAvatar(member.user.displayAvatarURL({ dynamic: false, format: 'png'}))
  .setBackground(`https://images-ext-1.discordapp.net/external/2_ggr5CABhNTxnvfAo4u-dkyH19rKi-TLW3F90uReA8/%3Fq%3Dtbn%3AANd9GcSnJzW2k6dxsWUVY31VJqVYkArBdPS5Nej7KQ%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images?width=239&height=119`)
  .toAttachment();
 
const attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye-image.png");

   
    const actmssg = mssgs[member.guild.id].status
  const chan = member.guild.channels.cache.get(dachannel)
  if (!chan) return;
  if (chan){
    chan.send(eval('`'+actmssg+'`'))
    chan.send(attachment)
  }


  
})

client.on("guildMemberRemove", async member => {
   let chans = JSON.parse(fs.readFileSync("./goodbyechannels.json", "utf8"))
    if (!chans[member.guild.id]){
      chans[member.guild.id] = {
        status: 'NA'
      }
    }
    const dachannel = chans[member.guild.id].status;

  const flags = {
    DISCORD_EMPLOYEE: '<:staff:850632050837815306>',
    DISCORD_PARTNER: '<:Partner:850632296826011669>',
    BUGHUNTER_LEVEL_1: '<:bughunter:850632644906975242>',
    BUGHUNTER_LEVEL_2: '<:bughunter2:850632924876767293>',
    HYPESQUAD_EVENTS: '<:hypesquadevents:850633179081867275>',
    HOUSE_BRAVERY: '<:hypesquadbrave:850633448065728582>',
    HOUSE_BRILLIANCE: '<:hypesquadbrilliant:850633665699512330>',
    HOUSE_BALANCE: '<:hypebalance:850633863599751198>',
    EARLY_SUPPORTER: '<:earlysupporterack:850634167292788746>',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: '<:db_verified_blurple:847130788376870943>',
    VERIFIED_DEVELOPER: '<:verifiedDevBadge:744342594271838289>'
};


  let mssgs = JSON.parse(fs.readFileSync("./goodbyemessage.json", "utf8"))
    if (!mssgs[member.guild.id]){
      mssgs[member.guild.id] = {
        status: 'Aw **${member.user.tag}**, left **${member.guild.name}** :('
      }
    }
      const Canvas = require('discord-canvas');
   

    const image = await new Canvas.Goodbye()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount)
  .setGuildName(member.guild.name)
  
  .setColor("border")
  .setColor("username-box")
  .setColor("discriminator-box")
  .setColor("message-box")
  .setColor("title", "#FFFFFF")
  .setColor("avatar", "#FFFFFF")
  .setAvatar(member.user.displayAvatarURL({ dynamic: false, format: 'png'}))
  .setBackground(`https://images-ext-1.discordapp.net/external/2_ggr5CABhNTxnvfAo4u-dkyH19rKi-TLW3F90uReA8/%3Fq%3Dtbn%3AANd9GcSnJzW2k6dxsWUVY31VJqVYkArBdPS5Nej7KQ%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images?width=239&height=119`)
  .toAttachment();
 
const attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");

   
    const actmssg = mssgs[member.guild.id].status
  const chan = member.guild.channels.cache.get(dachannel)
  if (!chan) return;
  if (chan){
    chan.send(eval('`'+actmssg+'`'))
    chan.send(attachment)
  }


})
fs.readdir('./events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(f => {
		if (!f.endsWith('.js')) return;
		const event = require(`./events/${f}`);
		let eventName = f.split('.')[0];
		client.on(eventName, event.bind(null, client));
	});
});

fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(f => {
		if (!f.endsWith('.js')) return;
		let command = require(`./commands/${f}`);
		client.commands.set(command.help.name, command);
		command.help.aliases.forEach(alias => {
			client.aliases.set(alias, command.help.name);
		});
	});
});


client.login(client.config.token);
