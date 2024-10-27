const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.execute = async (client, message, args) => {

    fetch(`https://showcase.api.linx.twenty57.net/UnixTime/tounix?date=now`)
    .then(res => res.json())
    .then(data => {
        message.lineReply(`This time is something that changes for everyone...<t:${data}>`)
    });

  
}
  
exports.help = {
    name: "setstamp",
    aliases: ["settimestamp","time"],
    usage: "setstamp"
}