const Discord = require("discord.js");
const ownerid = "619457552563961896";

exports.execute = async (client, message, args) => {
    
  let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let gayrate = Math.floor(Math.random() * 101)


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("Dumbrate Machine!")
                .setColor("RANDOM")
                .setDescription("You are `" + gayrate + "%` dumb! <:LookAtThisNoob:839800297743581184>")
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.lineReply(gayrateEmbed).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("Dumbrate Machine!")
                .setColor("RANDOM")
                .setDescription(`${User} is \`${gayrate}%\` dumb! <:LookAtThisNoob:839800297743581184>`)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.lineReply(argsEmbed).catch(e => {
                console.log(e)
            })
        }
  
}
  
exports.help = {
    name: "dumbrate",
    aliases: [],
    usage: "dumbrate"
}