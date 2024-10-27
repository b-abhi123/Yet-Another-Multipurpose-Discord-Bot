const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   message.channel.send(`Hey there! ${message.author}!! I'm glad you tuned in.\n \nBunny Girl Senpai will now be **discontinued!**\n \nThis does **NOT** mean that the bot will shut down. It will only not be updated and taken care of in the future.\n \nI wanted to let you guys know this, since I don't wanna keep all these things to myself.\n \nWhen I entered Discord, the first bot I saw was Dyno, Arcane and a couple of others. I had no idea about those back then, but when I used them, a sense of collective belonging came towards me. I took initiative to actually start making one on my own. But, the first time when I did it, I sucked. I could just make it go online [with difficulty]\n \nI always felt about how I wanted to make something that was never seen on Discord. Moderation, Leveling, Economy, Memes...bla bla bla. I didn't wanna make those.\n \nIf many of you guys don't know, Bunny Girl Senpai was previously called "Birby". I just made that bot because the one in my friend's server just sucked. I made it, [with great difficulty, I was still a beginner] but then, I started adding a lot of stuff in it as well, thanks to the lessons in the OSS projects in my developers' Github. I kept adding new features, and it just got all messy. On the 3rd of September, I realized. I could make something, that was never seen on Discord. Something unique, fun, active for a server, engaging and customizable! I knew Eromin was my new project. I worked on it for a week or something, and then I released it.\nI have given an early access to this project to whoever has Bunny Girl Senpai on their server. And I mean it. It is going to be fully free project!\n \nThanks for tuning in! I hope you have a great day ahead!\n \nOh and here's a link for Eromin!\nhttps://discord.com/api/oauth2/authorize?client_id=855708674630615041&permissions=534789880640&scope=bot`)
}
    
  
exports.help = {
    name: "discontinuedinfo",
    aliases: [],
    usage: "discontinuedinfo"
}