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


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`حماية حمو عع`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
