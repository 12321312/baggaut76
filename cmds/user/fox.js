const Discord = module.require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => { 

      let ambed = new Discord.RichEmbed()

      .setThumbnail("https://static.life.ru/posts/2018/04/1106876/528a9de443b6a0d3b24b413b53e39c4f__980x.jpg");

      message.channel.send({embed:ambed}); 

}; 


module.exports.command = {
    name: 'fox',
    aliases: ["лиса", "лис", "foxi", "фокс", "фоксик"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",
    category: "user",
    enabled: true
}; 
