const { MessageEmbed } = require("discord.js");
const randomPuppy = require('random-puppy')
exports.execute = async (client, message, args) => {
  
     randomPuppy('animemes') 
    .then(url => { //then the results is
        const embed = new MessageEmbed() 
        .setTitle('Random Anime Meme is here!')
    
        .setImage(url) //The link we requested turns into an image
        .setColor('RANDOM') 
        
     return message.lineReply({ embed }); //done ; The image will be shown
    }).catch(() => message.lineReply('API error fetching the meme, please try again later!'));
    
    
}
  
exports.help = {
    name: "animeme",
    aliases: ["animememe","animeme","memeanime"],
    usage: "animeme"
}