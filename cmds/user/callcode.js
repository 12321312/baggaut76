const Discord = module.require("discord.js");
const fs = require("fs");
const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: `https://nukacrypt.com/`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

exports.run = async (bot, message, args) => { 
    rp(options)
    .then(($) => {
      let code = ($('#nuclearcodess').text());
      let alfa = code.slice(130, -79);
      let brava = code.slice(138, -71);
      let charli = code.slice(146, -63);
      
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

    })
    .catch((err) => {
      console.log(err);
    })
}; 


module.exports.command = {
    name: 'callcode',
    aliases: ["тесткод", "кодт", "кооооод"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",
    category: "user",
    enabled: true
}; 
