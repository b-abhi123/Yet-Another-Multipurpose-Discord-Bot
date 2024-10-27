const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   let answers = [
          //Positive.
          "this is it chief", "can i get an amen", "OwO", "UwU", "Indeed, it is so", "yeet", "yes", "that's absolutely correct",
          "i agree", "heeyy we have something in common", "Yeah, why not", "Only if you say please",

          //Maybe??
          "ask canny", "i guess??", "with the way things are, who knows", "¯\\_(ツ)_/¯", "not enough info", "i don't want to answer that", `how would I even know that!`,
          "you might wanna reconsider your life choices", "how about you watch anime instead", "Maybe", "if you pray hard enough",

          //Negative
           "that's a no from me chief", "leave me alone, i'm tired", `I hope you are not serious`,
          "how about you shut up", "simply put, no", "not gonna happen", "i dont think so", "ask again in 11 decades",
      ];

      let answer = answers[Math.floor(Math.random() * answers.length)];

      if(!args[0]) return message.lineReply('give me a question first aaaa')
      if(args[9]) return message.lineReply('well thats a pretty long question to 8ball lmao')
      
      let question = args.join(" ")
      if(question.includes('https://')) return message.lineReply('i cant 8ball links lol')

      message.lineReply(answer)
  
}
  
exports.help = {
    name: "8ball",
    aliases: ["8boll"],
    usage: "8ball <args>"
}