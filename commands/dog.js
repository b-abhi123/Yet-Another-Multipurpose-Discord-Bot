const Discord = require("discord.js");
const request = require("request");

exports.execute = async (client, message, args) => {
  
  let url = 'https://random.dog/woof.json';
    try {
        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                message.lineReply(body.url);
                console.log(body.url);
            }
        })
    } catch (err) {
        console.log(err);
    }  
  
}
  
exports.help = {
    name: "dog",
    aliases: ["doge","doggy","doggo","randomdog"],
    usage: "dog"
}