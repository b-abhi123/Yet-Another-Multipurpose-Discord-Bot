const { MessageEmbed } = require("discord.js");
const covidapi = require('covidapi')
exports.execute = async (client, message, args) => {
 
  if (!args[0]) {
			message.react('👎')
			return message.lineReply(
				"Please tell me which country's covid information you would like!"
			)
		} else {
			const countrycovid = args.join(' ')
			const data = await covidapi.countries({ country: countrycovid })

			if (data.cases === undefined) {
				message.react('👎')
				return message.lineReply(
					`Unable to fetch covid-19 stats for **"${countrycovid}"**`
				)
			}

			const countryCovidEmbed = new MessageEmbed()
				.setColor('RED')
				.setTitle(`Covid-19 stats for "${countrycovid}"`)
				.addField('Cases', data.cases, true)
				.addField('Active Cases', data.active, true)
				.addField('Deaths', data.deaths, true)
				.addField('Recovered', data.recovered, true)

			message.lineReply(countryCovidEmbed)
}
}

  
exports.help = {
    name: "covid",
    aliases: ["corona"],
    usage: "covid <country>"
}