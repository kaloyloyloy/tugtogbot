const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');
const { MessageEmbed } = require('discord.js');
const { prefix } = require("./config.json");

const ytdl = require('ytdl-core');
const searcher = require('yt-search');
const { keepAlive , spotifyApi }  = require("./server.js");

const loadCommands = require('./commands/loadCommands');

const client = new Discord.Client();

client.login(process.env['token']).then().catch(reason => {

    console.log("Login failed: " + reason);
    console.log("Token used: " + botToken);

});;
client.on('debug', console.log);
client.setMaxListeners(50);
client.once("ready", () => {
  console.log("ready");
  client.user.setActivity(`${prefix} help`);
  loadCommands(client)
});

keepAlive();