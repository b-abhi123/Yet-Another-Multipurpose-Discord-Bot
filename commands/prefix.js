const fs = require('fs');

exports.execute = (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`You lack permission to run this command [MANAGE SERVER] \nI can still notify you that the prefix here is ${client.prefix} and you can ping me anytime to find out the prefix for this server.`);

  if(!args[0]) return message.channel.send(`The prefix here is ${client.prefix} \nIf you are planning to change the prefix, please do ${client.prefix}prefix <newprefix> and you can ping me anytime to find out what your prefix is!`);

  if(args[0].length > 3) return message.channel.send('Your prefix is way too long, it cant be more than 3 characters lmao');

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  prefixes[message.guild.id] = {
    prefixes: args[0]
  }

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  })

  message.channel.send(`Prefix is now ${args[0]}`)
 
}

exports.help = {
    name: "prefix",
    aliases: ["setprefix"],
    usage: "prefix"
}