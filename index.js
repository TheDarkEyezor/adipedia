const Discord = require("Discord.js")
const keepAlive = require("./server")
const config = require('./config.json')
const { MessageEmbed } = require('discord.js');
var talk = true
const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_TYPING",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "GUILD_SCHEDULED_EVENTS"

    ]
});
const prefix = "-"
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`I'm awake! Logged in as ${client.user.tag}!`)
});

client.on('message', message => {
  if(message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if(message.guild){

    var server = message.guild.id;
   if(server = '927578298740015104'){
     var ufat = true
    } else {
      var ufat = false
    }

    if (!message.content.startsWith(prefix)){
      client.commands.get('replies').execute(message,args, ufat);
    }
    
    //Commands for servers ONLY//
    if(command == 'ping'){
      client.commands.get('ping').execute(message,args);
    } else if(command == 'timeout'){
      client.commands.get('timeout').execute(message,args);
    } else if((command == 'stop' || command == 'shutup') && message.author == '705977972594835577' && talk != false){
      message.channel.send("Ok, I'll stop talking")
      talk = false
    } else if(command == 'talk' && message.author == '705977972594835577' && talk != true){
      message.channel.send("As you wish")
      talk = true
    } else if(command == 'clear' && message.author == '705977972594835577' ){
      client.commands.get('clear').execute(message,args);
    } else if(command == 'help'){
      client.commands.get('help').execute(message, Discord);
    } else if (command == 'dm'){
      if(!message.mentions.users.first()){
        var targetUser = message.author
      } else {
        var targetUser = message.mentions.users.first()
      }
      var replies = Array("Ayy, I just slid into your dms", "I think i'm in the wrong place", "Hello? Hello Hello?");
      var reply = replies[Math.floor(Math.random()*replies.length)];
      targetUser.send(reply)
    }
  }
  if(!message.guild){
    // Commands for DMs only//

  }
  // Commands for both dms and servers//
  if(command == 'react'){
    message.react('😁');
  }
    
});

keepAlive()
client.login(config.token)