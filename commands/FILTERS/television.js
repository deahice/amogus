const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"television",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
  run: async(client,message,args) => {
    
   
const player = message.client.manager.players.get(message.guild.id)
  
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("000000")
      .setDescription("<:error:888328080110800926> There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("000000")
      .setDescription("<:error:888328080110800926> Please connect to a voice channel")
    return message.channel.send(embed)
  }

   if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("000000")
      .setDescription(`Must be in the same voice channel`)
    return message.channel.send(embed)
  }

if (!args[0]) {
			player.setEQ(...Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.65 })));
			const msg = await message.channel.send(`<a:Loading:909335917779648512> Turning on **Television mode**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned on **Television mode**')
				.setColor("BLACK");
			await delay(2000);
			return msg.edit('', embed);
		}

		if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
	player.setEQ(Array(13).fill(0).map((n, i) => ({
            band: i,
            gain: 0
        })));
        const msg = await message.channel.send(`<a:Loading:909335917779648512> Turning off **Television mode**.`);
			const embed = new MessageEmbed()
				.setDescription('Turnemessage.television mode**')
				.setColor("BLACK");
			await delay(2000);
			return msg.edit('', embed);
		}

	}
};