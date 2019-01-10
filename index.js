const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '!'
client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'scrim')) {
        message.channel.sendMessage('The next scrim will be announced in the announcements tab')
    }
});

client.login('TOKEN')
