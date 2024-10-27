const { MessageEmbed } = require("discord.js");
const request = require("superagent");
exports.execute = async (client, message, args) => {
 
  request.get('http://api.adviceslip.com/advice').end((err, res) => {
			if (!err && res.status === 200) {
				try {
					JSON.parse(res.text)
				} catch (e) {
					return message.lineReply('An API error has occured! Please try again later.')
				}
				const advice = JSON.parse(res.text)
				message.lineReply(advice.slip.advice)
			} else {
				console.error(
					`🔴 REST call failed: ${err} \n status code: ${res.status}`
				)
			}
		})
}
  
exports.help = {
    name: "advice",
    aliases: ["advise"],
    usage: "advice"
}