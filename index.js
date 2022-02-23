const Discord = require("Discord.js")
const path = require('path')
const dotenv = require('dotenv')
require('dotenv').config();
// Load config
dotenv.config({ path: './config/config.env' })

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


client.on("ready", () => {
  console.log(`I'm awake! Logged in as ${client.user.tag}!`)
});



client.login(config.token)