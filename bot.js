const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543827623034355723")
setInterval(function() {
channel.send(`احا الشبشب ضاع`);
}, 30)
})

client.login("NTQzODIyNzIxODg1MTQzMDQw.D0CKrw.EXqK0RtVt_g0RvR7wjX1iLZd84E");
