const Discord = require('discord.js');
const client = new Discord.Client({ fetchAllMembers: true });



client.on("guildMemberAdd",

member => {

    var moment = require("moment");

 

                    let modlog2 = client.channels.find('name', 'cshat');


 

         moment.locale('ar-ly');

         var h = member.user;

        let heroo = new Discord.RichEmbed()

        .setColor('#6fc167')

        .setThumbnail(h.avatarURL)

        .setAuthor(h.username,h.avatarURL)

        .addField(': You have been joined Discord Before',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            

         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")

     modlog2.send({embed:heroo});

 











});












    
    
    
    

















  
  
var fs = require('fs');
var Canvas = require('canvas')
var jimp = require('jimp')
    var fs = require('fs');
var Canvas = require('canvas')
var jimp = require('jimp')
client.on('guildMemberAdd', member => {
      
        if (member.guild.id === "419854921ds95247893") {
        var w = ['./img/Jedlly.png'];
           let Image = Canvas.Image,
               canvas = new Canvas(401, 202),
               ctx = canvas.getContext('2d');
           ctx.patternQuality = 'bilinear';
           ctx.filter = 'bilinear';
           ctx.antialias = 'subpixel';
           ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
           ctx.shadowOffsetY = 2;
           ctx.shadowBlur = 2;
           fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
               if (err) return console.log(err);
               let BG = Canvas.Image;
               let ground = new Image;
               ground.src = Background;
               ctx.drawImage(ground, 0, 0, 401, 202);
   
   })
   
                   let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                   jimp.read(url, (err, ava) => {
                       if (err) return console.log(err);
                       ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                           if (err) return console.log(err);

//AVATAR�
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75.5, 101, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 38, 128, 126);                    
      //ur name
                        
   client.channels.get("419936453s43313922").sendFile(canvas.toBuffer())
  client.channels.get("419936453sd43313922").send(`**Welcome ${member} To __${member.guild.name}__You are User number_  ${member.guild.memberCount}_** `)

   })})  }
   });





  
  


  
       client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('gmail')){
           if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('snapchat')){
           if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('instagram')){
            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('twitter')){
           if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('facebook')){
            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('youtube')){
          if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    
    });
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});


client.on('message', message => {
   if (message.content === "@roll") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});











client.on('message',function(message) {
                  if(!message.channel.guild) return;

  const prefix = "#";
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    
    if (message.author.bot) return;
    
    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);

/*if(command == "emoji-img"){
        let emojis = msg.guild.emojis
  msg.channel.send({ files: [emoji.url] });
}*/
}
});



client.on('message', message => {
    if (message.content.startsWith("invites")) {
    message.guild.fetchInvites()
    .then(invites => message.channel.send(`You have been invited  **${invites.find(invite => invite.inviter.id === message.author.id).uses} Members**  To this server`))
     
    }
});




    client.on('guildMemberAdd', member => {

     if (member.guild.id === "419854921d895247893") {
    
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
        let Image = Canvas.Image,
            canvas = new Canvas(749, 198),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';    
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();
                
        fs.readFile('./img/qqqq.jpg', function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);                        
                                   //wl
                        ctx.font = '35px Aeland';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(" Welcome to our server", 440, 40);
                        
                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 25);
                        
                       //AVATAR�
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75, 101, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 38, 128, 126);                    
                        
client.channels.get("4257162256d63041537").sendFile(canvas.toBuffer())



})
})

}
});
    



 client.on('guildMemberAdd', member => {

     if (member.guild.id === "438937491592970244") {
    
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./img/bull1.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(749, 198),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        ctx.font = '35px agent_orange';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#34495E";
                        ctx.textAlign = "center";
                        ctx.fillText(" Welcome to " + member.guild.name , 300, 55);

                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#2C3E50";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 300, 110);

                         ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#2C3E50";
                        ctx.textAlign = "center";
                        ctx.fillText("Member Number" + member.guild.memberCount, 300, 150);


                        //Avatar
                    let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75, 101, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 38, 128, 126);     
client.channels.get("438944866139897856").sendFile(canvas.toBuffer())



})
})

}
});





var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "Bull")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'chat');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "Bull")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` **Invited by**  ${Invite.inviter} `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});















client.login(process.env.BOT_TOKEN);
