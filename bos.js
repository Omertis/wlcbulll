const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('voiceStateUpdate', (u, member) => {
  var parent = '487902728497135638';
  var channel = '487902833740349450';
  if(member.voiceChannel === null || member.voiceChannel !== member.guild.channels.get(channel)) return console.log(`${member.user.username}'s channel isnt the needed one.`);
  member.guild.createChannel(`${member.user.username}`, 'voice').then(c => {
  client.channels.get(parent).overwritePermissions(member, {
                                CONNECT:false,
                                         SPEAK:false
})

    if(!c) return;
    c.setParent(parent);
    member.setVoiceChannel(c);
    setInterval(() => {
      if(!c) return;
      if(c.members.size === 0) {
        c.delete();
  client.channels.get(parent).overwritePermissions(member, {
                                CONNECT:true,
                                         SPEAK:true
        })

      }
    }, 1700);
  });
});


client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('487903515667202060');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: ${currentSize}`);
  if (currentSize !== size) channel.setName(`Just Online: ${currentSize}`);
});


client.login(process.env.BOT_TOKEN);
