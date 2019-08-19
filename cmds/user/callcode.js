const Discord = module.require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => { 
let alfa = "74293332";
let brava = "87904708";
let charli = "39313471";
    
let a = message.author;
    let ambed = new Discord.RichEmbed()
    .setTitle("Коды запуска ракет:")
    .setTimestamp()
    .setFooter("Система запуска.", "https://vignette.wikia.nocookie.net/fallout/images/c/c2/Icon_Vault_76.png/revision/latest?cb=20181217214332&path-prefix=ru")
    .setColor('#c10020')
    .setThumbnail("https://vignette.wikia.nocookie.net/fallout/images/b/b2/Mini_nuke.png/revision/latest?cb=20110404234408")
    .addField("Альфа:", alfa)
    .addField("Браво:", brava)
    .addField("Чарли:", charli);
    message.channel.send({embed:ambed});

};
module.exports.command = {
    name: 'code',
    aliases: ["код", "коды", "бункер"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",
    category: "user",
    enabled: true
}; 
