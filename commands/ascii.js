const discord = require("discord.js");
const figlet = require("figlet");

exports.execute = async (client, message, args) => {
    
  let text = args.join(" ");
   if(!text) {
return message.lineReply(`give me a text along with it smh`)
}
   let maxlen = 20
if(text.length > 20) {
return message.lineReply(`you serious? send something that has less than 20 chars.`)
}

  if (args[10]) return message.lineReply('Sorry, that text is too long for me!')
  let question = args.join(" ")
  if(question.includes('https://') || question.includes('http://')) return message.lineReply('i cant do it with links lol')
  if(question.includes('@')) return message.lineReply('no mentions pleaseee')
  if(question.includes('#')) return message.lineReply('Sorry, # is an invalid character! Please do normal text!')

figlet(text, function(err, data) {
message.lineReply(data, {
code: 'AsciiArt' 
});
})
  
}
  
exports.help = {
    name: "ascii",
    aliases: ["asci"],
    usage: "ascii"
}