const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');
let config = require('./config.json');
let prefix = config.prefix;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const loadCommands = module.exports.loadCommands = (dir = "./cmds/") => {
    fs.readdir(dir, (error, files) => {                 
        if (error) return console.log(error); 
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
        console.log(`Загружено ${jsfiles.length} комманд`);                   
        files.forEach((file) => {   
            if (fs.lstatSync(dir + file).isDirectory()) {
                loadCommands(dir + file + "/");
                return;
            }

            delete require.cache[require.resolve(`${dir}${file}`)];

            let props = require(`${dir}${file}`);

            bot.commands.set(props.command.name, props);

            if (props.command.aliases)  props.command.aliases.forEach(alias => { 
                bot.aliases.set(alias, props.command.name); 
            });
        });
    });
};
loadCommands();

bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  let command;

   if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
   } else if (bot.aliases.has(cmd)) {
    command = bot.commands.get(bot.aliases.get(cmd));
   }

   if (!message.content.startsWith(prefix)) return;
   await message.react(bot.emojis.get("556493079486529548"));

   if (command) {
    if (message.author.id !== "294844223675564034" && !command.command.enabled) return message.reply("извините. Команда была отключена!");
   }
   
   try {
    command.run(bot, message, args);
   } catch (e) {
   }
});
   
bot.on('ready', () => {
  console.log('Запущен, сэр!'); 
  /*
  const guild = bot.guilds.get("226963374338998279");
  const member = guild.member(bot.users.get('294844223675564034'));
  const roles = new Set(member.roles.keyArray());
  roles.delete('578622679058481173');
  member.setRoles([...roles]); */

  bot.user.setPresence({
         status: "online",
         game: {
             name: "Fallout 76",
             url: "https://www.youtube.com/watch?v=6uCTdjTjbWA",
             type: "STREAMING"
         }
     }); 
});

bot.login(process.env.BOT_TOKEN);   
