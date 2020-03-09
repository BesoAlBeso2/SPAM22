const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("685898227542654987")
setInterval(function() {
channel.send(`***__HELLO HELLO HELLO HELLO HELLO__***`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
