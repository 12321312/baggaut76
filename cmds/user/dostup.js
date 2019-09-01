const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

exports.run = async (bot, message, args) => { 
  let xip = await superagent
  .get(`https://api.bethesda.net/status/ext-server-status?product_id=8`);
  let fal = xip.body;

  console.log(fal.platform.response.fallout76);    
      /*let ambed = new Discord.RichEmbed()
      .setTitle("Доступ сервера:")
      .setTimestamp()
      .setFooter("Систем доступ.", "https://vignette.wikia.nocookie.net/fallout/images/c/c2/Icon_Vault_76.png/revision/latest?cb=20181217214332&path-prefix=ru")
      .setColor('#c10020')
      .setThumbnail("https://vignette.wikia.nocookie.net/fallout/images/b/b2/Mini_nuke.png/revision/latest?cb=20110404234408")
      .addField("Статус:", body.fallout76);

      message.channel.send({embed:ambed}); */

}; 


module.exports.command = {
    name: 'dostup',
    aliases: ["статус", "доступ", "сервер", "запущен", "с"],
    description: "Показывает пинг, чо доебался?",
    usage: "usercommand",
    category: "user",
    enabled: true
}; 
