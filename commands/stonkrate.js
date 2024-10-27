const Discord = require("discord.js");
const ownerid = "619457552563961896";

exports.execute = async (client, message, args) => {
    
  let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let gayrate = Math.floor(Math.random() * 101)


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("Stonk Machine!")
                .setColor("RANDOM")
                .setDescription("You are `" + gayrate + "%` stinky! <:PandaDisgust:850269301063155722>")
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(gayrateEmbed).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("Stonk Machine!")
                .setColor("RANDOM")
                .setDescription(`${User} is \`${gayrate}%\` stinky! <:PandaDisgust:850269301063155722>`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(argsEmbed).catch(e => {
                console.log(e)
            })
        }
  
}
  
exports.help = {
    name: "stonkrate",
    aliases: [],
    usage: "stonkrate"
}