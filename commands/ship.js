const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.execute = async (client, message, args) => {
   let user =  await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[1].toLocaleLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[1].toLocaleLowerCase());
        if(!args[0]) return message.channel.send("Enter the name of the user first.")
        if(!args[1]) return message.channel.send("Enter the name of the user you want to ship them to.")
        
        if (!user) return message.channel.send("Give me a valid user bruh")
        if (!user2) return message.channel.send("is that even a valid user? cmon-")

        let m = await message.channel.send("Using my love calculating Math formulae...");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ship&user1=${user.user.displayAvatarURL({ format: "png", size: 512 })}&user2=${user2.user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "whyareyoucheckingthis.png");
            message.channel.send(attachment);
            const percent = Math.floor((Math.random() * 100) + 1)
            if(percent < 5) return message.channel.send(`Well, thats a pity!\n${user} x ${user2}...I totally hate to admit it, but it isn't possible at all!\nYou just got a **${percent}% chance...**\nI think I will leave you guys to deal with this...*leaves*\noh yea btw that was a rare occurence lol\nalso studies have proven that using the ship command with your crush is very effective hmm`)
            if(percent < 25) return message.channel.send(`Hmm...I would say you guys are *frends*\n${user} x ${user2}...I guess **${user2.username}** just friendzoned **${user1.username}**!\nYou just got a **${percent}% chance...**\nenjoy being bffs forever lol\nthere are some rare occurences too btw, and good luck with your 'relationship'\nalso studies have proven that using the ship command with your crush is very effective hmm`)
            if(percent < 50) return message.channel.send(`That was a pretty impressive check, but it still aint enough!!\n${user} x ${user2}...They just know each other well, and are very good **friends!**\nYou just got a **${percent}% chance...**\nMay your friendship last long lmaooo\nthere are some rare occurences too btw, and good luck with your 'relationship'\nalso studies have proven that using the ship command with your crush is very effective hmm`)
            if(percent === 69) return message.channel.send(`the cops caught you because you just got **69ed**, but yeah that was fun :smirk:\npretty rare occurence, gg!\nalso not meaning to make you sad but you got a sentence for 10 years lol`)
            if(percent < 75) return message.channel.send(`wOw that is an effective couple!\n${user} x ${user2}...i bet this will be successful in the future, just try a bit harder :smirk:\nYou just got a **${percent}% chance...**\nI hope your relationship prospers!\nthere are some rare occurences too btw, and good luck with your 'relationship'\nalso studies have proven that using the ship command with your crush is very effective hmm`)
            if(percent < 95) return message.channel.send(`I havent seen such a couple in long..\n${user} x ${user2}...pog, you guys will make it well in the future~\nYou just got a **${percent}% chance...**\nif your relationship doesn't succeed i will literally shut myself down tommorow *thinks again*\nthere are some rare occurences too btw, and good luck with your 'relationship'\nalso studies have proven that using the ship command with your crush is very effective hmm`)
            if(percent < 100) return message.channel.send(`You just got a..PERFECT CHECK!\n${user} x ${user2}...this couple was literally made in heaven bruh\nYou just got a **${percent}% chance...**\nI have never seen this occur- im just stunned at your love :pleading_face:\nthis was a pretty rare occurence, gg~\nalso studies have proven that using the ship command with your crush is very effective hmm`)

            m.delete({ timeout: 5000 });
            
        } catch(e){
            m.edit("Error, mention someone valid :/\nIf that didnt work, the API is down! Please try again later <3");
            m.channel.send(e)
        }
}
  
exports.help = {
    name: "ship",
    aliases: ["love"],
    usage: "ship"
}