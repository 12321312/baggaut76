const Discord = module.require("discord.js");
const fs = require("fs");
const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: `https://bethesda.net/ru/status`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

exports.run = async (bot, message, args) => { 
    rp(options)
    .then(($) => {
      let code = ($('.service-container').text());
      console.log(code);

      /* let a = message.author;
      let ambed = new Discord.RichEmbed()
      .setTitle("Доступ сервера:")
      .setTimestamp()
      .setFooter("Систем доступ.", "https://vignette.wikia.nocookie.net/fallout/images/c/c2/Icon_Vault_76.png/revision/latest?cb=20181217214332&path-prefix=ru")
      .setColor('#c10020')
      .setThumbnail("https://vignette.wikia.nocookie.net/fallout/images/b/b2/Mini_nuke.png/revision/latest?cb=20110404234408")
      .addField("Статус:", alfa);

      message.channel.send({embed:ambed}); */

    })
    .catch((err) => {
      console.log(err);
    })
}; 


module.exports.command = {
    name: 'dostup',
    aliases: ["статус", "доступ", "сервер", "запущен", "с"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",
    category: "user",
    enabled: true
}; 
