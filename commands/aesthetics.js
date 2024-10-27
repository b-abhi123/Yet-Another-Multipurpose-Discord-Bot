const { MessageEmbed } = require("discord.js");
const aesthetics = require('aesthetics')
exports.execute = async (client, message, args) => {
  
  if (!args[0]) {
			message.react('👎')
			return message.lineReply(
				'Ｙｏｕ　ｄｉｄｎ＇ｔ　ｔｅｌｌ　ｍｅ　ｗｈａｔ　ｔｏ　ｃｏｎｖｅｒｔ'
			)
		}
  if (args[10]) return message.lineReply('Sorry, that text is too long for me to aestheti*cise*')
  let question = args.join(" ")
  if(question.includes('https://') || question.includes('http://')) return message.lineReply('i cant aestheti*cise* links lol')
  if(question.includes('@')) return message.lineReply('i cant aestheti*cise* mentions lol')
  if(question.includes('#')) return message.lineReply('Sorry, # is an invalid character! Please do normal text!')
	message.lineReply(aesthetics(args.join(' ')))   
    
    
}
  
exports.help = {
    name: "aesthetics",
    aliases: ["vaporwave"],
    usage: "aesthetics"
}