const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  
      let answers = [
        //Postive
        "💯", "Yes", "me likey", "👀", "😍😍", "he's cool yea", "she's cool yea", "uhhhh yes", "indede", "would bang", "my favorite", "pretty good", "music to my ears",
        "dreamy", "Cool", "at least it's not bad", "not the best but still good", "AMAZING", "dude, that's like, awesome",
        , "underrated",

        //Negative
        "how about no", "yeah no", "needs much improvement", "barely ok, in short it's shit", "💩 basically", "just horrible", "never ask me to rate that again", "overrated",
        "nobody wants to see that", "i disapprove", "i'm not allowed to say", "that's goodn't", "oh no", "very uhh, how do i say this without sounding rude", "might as well throw it away",
    
    ];

    let answer = answers[Math.floor(Math.random() * answers.length)];

    if (args[0]) {
        message.channel.send(answer);
    } else {
        message.channel.send("Give me something to rate first lol");
    }
  
}
  
exports.help = {
    name: "rate",
    aliases: ["rAte"],
    usage: "rate <something>"
}