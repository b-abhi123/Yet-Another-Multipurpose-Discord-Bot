const link = 'https://top.gg/bot/834630917879627817/vote'

exports.execute = async (client, message, args) => {
   message.channel.send(`If you are having fun with me, please take some time off your day, to make mine at https://top.gg/bot/834630917879627817/vote :)`)
   message.channel.send('Vote Rewards: +10K Roobies, +1K Diemonds, +100 Emerolds and a RANDOM lootbox!\nAutomatically get these rewards after voting every 12 hours for Bunny Girl Senpai!')
}
  
exports.help = {
    name: "vote",
    aliases: ["support"],
    usage: "vote"
}