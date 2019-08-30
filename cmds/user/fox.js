const Discord = module.require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => { 
    let randonciks = Math.floor(Math.random() * 100) + 1 ;
      let ambed = new Discord.RichEmbed()
      .setImage("https://randomfox.ca/images/"+ randonciks +".jpg");

      message.channel.send({embed:ambed}); 

}; 


module.exports.command = {
    name: 'fox',
    aliases: ["лиса", "foxi", "фокс", "фоксик"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",
    category: "user",
    enabled: true
}; 
