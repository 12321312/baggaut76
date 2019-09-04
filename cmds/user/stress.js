const Discord = module.require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => { 
    let tomute = "144822337412268032"
    message.reply(`вызывает великого и ужасного **<@${tomute}>'a**`); 
}; 


module.exports.command = {
    name: 'fox',
    aliases: ["лиса", "foxi", "фокс", "фоксик"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",
    category: "user",
    enabled: true
}; 
