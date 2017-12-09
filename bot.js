const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzg4NjQxNDg1ODk5MzAwODY1.DQzPDw.h0uE6n1XQwRzNYNvv8yqVGad_po);
