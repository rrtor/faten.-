const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**

السلام عليكم
:earth_asia: طلب صغير تنورنه حياك كلان سحق:heart:  ,   https://discord.gg/3EBBSTd
حلمنه نوصل 2000 عضو**


 ${member} .... الدعوه خاصه لك يا قلبي .
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**
السلام عليكم
:earth_asia: طلب صغير تنورنه حياك كلان سحق:heart:  ,   https://discord.gg/3EBBSTd

حلمنه نوصل 2000 عضو**


 ${member} .... الدعوه خاصه لك يا قلبي .
**`) 
}).catch(console.error)
})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
