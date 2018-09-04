const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function(){
  client.user.setStatus("dnd");
    var ms = 40000 ;	
    var setGame = ['ابو عرب حبيب الكل'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});
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
