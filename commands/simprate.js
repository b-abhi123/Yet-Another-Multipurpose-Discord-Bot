const Discord = require("discord.js");
const ownerid = "619457552563961896";

exports.execute = async (client, message, args) => {
    
  let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let gayrate = Math.floor(Math.random() * 101)


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("Intelligence Calculation Machine!")
                .setColor("RANDOM")
                .setDescription("You are `" + gayrate + "%` smort! <:bigbrain:850271437050085426>")
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(gayrateEmbed).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("Intelligence Calculation Machine!")
                .setColor("RANDOM")
                .setDescription(`${User} is \`${gayrate}%\` smort! <:bigbrain:850271437050085426>`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        }
  
}
  
exports.help = {
    name: "smartrate",
    aliases: ["smortrate"],
    usage: "smartrate"
}