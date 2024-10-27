const { MessageEmbed } = require("discord.js");
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;


exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    const embed1 = new MessageEmbed()
        .setTitle(`Category: Fun Commands [Fun]`)
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('BLACK')
        .setDescription("Some Fun Commands so you and Mai can spend quality time together!")
        .addField(`${client.prefix}8ball`,"8Ball a couple of stuff, also REMEMBER Mai never lies.")
    
        .addField(`${client.prefix}rate`,"Make me rate something you want, and yes Birb doesn't lie")
        .addField(`${client.prefix}dog`,"Get a random cute dog, either an mp4 or a jpg.")
        .addField(`${client.prefix}meme`,"Get good memes and enjoy yourself!")
        .addField(`${client.prefix}cat`,"Get random cute cat embeds")
        .addField(`${client.prefix}jail`,"Jail a user ;-;")
        .addField(`${client.prefix}ship`,"A special image with another user :D")
        .addField(`${client.prefix}rip`,":( rip a user [or yourself lol]")
        .addField(`${client.prefix}ascii`,"transfer something into ascii format.")
        .addField(`${client.prefix}widen`, "Get a widened version of someone's pfp.")
        .addField(`${client.prefix}wasted`,"Display the wasted text on a pfp")
        .addField(`${client.prefix}clyde`,"Make Clyde say something")
        .addField(`${client.prefix}dumbrate`,"Check Your Dumbrate.")
        .addField(`${client.prefix}gayrate`,"Check Your Gayrate.")
        .addField(`${client.prefix}lesbianrate`,"Check Your Lesbian Rate.")
        .addField(`${client.prefix}stonkrate`,"Check Your Stonkrate.")
        .addField(`${client.prefix}simprate`,"Check Your Simprate.")
        .addField(`${client.prefix}smortrate`,"Check Your Intelligence.")
        .addField(`${client.prefix}trumptweet`,"Make Trump tweet something.")
        .addField(`${client.prefix}tableflip`,"Flip a table lol-")
        .addField(`${client.prefix}joke`,"Get a random joke, laugh with me!")
        .addField(`${client.prefix}advice`,"Your life may take a turn with these.")

        .addField(`${client.prefix}communism`,"lets all become a communist >:(")
        .addField(`${client.prefix}worthless`,"i sense a worthless being here")
        .addField(`${client.prefix}deepfry`,"fry someone deep yes")
        
    const embed2 = new MessageEmbed()
        .setColor('BLACK')
        .addField(`${client.prefix}heman`,"im too weak for the power of the HEMAN")
        .addField(`${client.prefix}itsbeenyears`,"yes it has.")
        .addField(`${client.prefix}motionblur`,"wait ima take your photo-")
        .addField(`${client.prefix}invert`,"invert colors! :(")
        .addField(`${client.prefix}lisa`,"lisa is here to teach yall some manners")
        .addField(`${client.prefix}kannapaper`,"kanna cute <3")
        .addField(`${client.prefix}couldread`,"if only they could read-")
        .addField(`${client.prefix}danger`,"theres a lot of danger here man")
        .addField(`${client.prefix}restaurant`,"im getting those vibes ohh boyyy")
        .addField(`${client.prefix}burn`,"burn something useless")
        .addField(`${client.prefix}say`,"Make me say something, pretty obvious. [i dont leave evidence]")
        .addField(`${client.prefix}aesthetics`,"ｉ　ｌｉｋｅ　ａｅｓｔｈｅｔｉｃ　ｔｅｘｔ")
        .setColor("BLACK")
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`Invite me to your server if you want to play :3`);

    

     return message.author.send(embed1).then(embed1 => {
      const confirm = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('DMed you about fun help commands!')
      .setURL(embed1.url)
      .setDescription('<a:Pepe_hack:827756844092489738> Click the title to jump to your  message!')
      message.author.send(embed2)
      message.channel.send(confirm) && message.react('📧')  
     }) 

     

      
     
}
  
exports.help = {
    name: "funhelp",
    aliases: ["helpfun"],
    usage: "funhelp"
}