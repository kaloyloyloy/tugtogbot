const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env['token'])

client.once("ready", () => {
  console.log("ready");
});
