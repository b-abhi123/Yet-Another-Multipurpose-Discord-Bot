const { MessageEmbed } = require("discord.js");
const fs = require('fs');

exports.execute = async (client, message, args) => {
  let toggles = JSON.parse(fs.readFileSync("./levelenabled.json", "utf8"))
    if (!toggles[message.guild.id]){
      toggles[message.guild.id] = {
        status: 'Disabled'
      }
    }
    const me = toggles[message.guild.id].status;

  const embed = new MessageEmbed()
    .setAuthor("Hello, I'm Bunny Girl Senpai!")
    .setTitle("Please choose a category from below, and you will be dmed about it!")
    .setDescription(`My Commands Database has ${client.commands.size} choices!`)
    .setColor("RANDOM")
    .setImage(client.user.displayAvatarURL())
    .addField(
      "Note",
      `The prefix here is ${client.prefix} lol`
    )
    .addField(
      `<a:money_wave:826313257798467594> ${client.prefix}economyhelp`,
      "The main sector of the bot, featuring all the economic commands"
    )
    .addField(
      `<:settings:585767366743293952> ${client.prefix}otherhelp`,
      "Features all the commands which do not belong on other categories."
    )
    .addField(
      `<:Cookie_eating_blob:827763008918388737> ${client.prefix}funhelp`,
      "Lists all the fun stuff you can do with Birb!"
    )
    .addField(
      `<:server_owner:836118942690705428> ${client.prefix}moderationhelp`,
      "Lists all the moderation commands possible within your server."
    )
    .addField(
      `:musical_note: ${client.prefix}musichelp`,"Play music directly from other sources, for free!"
    )
    .addField(
      `:arrow_double_up: ${client.prefix}levelshelp`,`[Disabled by default] Enable server ranks and role rewards. Currently ${me}.`
    )
    .addField(
      `<:Airi_Flushed:827762724821532722> ${client.prefix}animehelp`,`Some fun anime based commands that dont belong in the regular fun help.`
    )
    .addField(
      `:speech_left: ${client.prefix}chatbothelp`,`I can make your server active through intelligent chatting, run this command to learn more :]`
    )
    .addField(
      `<:stuffie_hug:827764072119271435> ${client.prefix}greethelp`,`Works as an aiport - set welcomers and goodbyes with custom messages and features for free!`
      )
    .addField(
      `<:blurple_partner:853259976848310312> ${client.prefix}partnershelp`,`Introducing our very own partners program for advertising and popularising your very own server! Run this command to know more!`
    )
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
    .setFooter(`${message.author.tag} by using a help category command, you agree to be DMed | Bot Developed by Mai~chael#1111`);
  return message.channel.send(embed);
};

exports.help = {
  name: "help",
  aliases: ["h"],
  usage: `help`
};
