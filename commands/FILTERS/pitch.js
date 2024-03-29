const {discord, MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"pitch",
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
      .setDescription(`<:error:888328080110800926> Must be in the same voice channel`)
    return message.channel.send(embed)
  }

	// Change bassboost value
if (isNaN(args[0])) return message.channel.send('<:error:888328080110800926> Amount must be a real number.');
		if (args[0] < 0) return message.channel.send('<:error:888328080110800926> Pitch must be greater than 0.');
		if (args[0] > 10) return message.channel.send('<:error:888328080110800926> Pitch must be less than 10.');

		player.setPitch(args[0]);
		const msg = await message.channel.send(`<a:Loading:909335917779648512> Setting pitch to **${args[0]}**.`);
		const embed = new discord.MessageEmbed()
		.setColor("#00000")
			.setDescription(`<a:yes:909104496318222387> Pitch set to: **${args[0]}**`);
		await delay(2000);
		return msg.edit('', embed);  
 
 
 	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(`<a:Loading:909335917779648512> Turning off **Pitch**.`);
			const embed = new MessageEmbed()
				.setDescription('<a:yes:909104496318222387> Turned off **Pitch**')
				.setColor("BLACK");
			await delay(2000);
			return msg.edit('', embed);
    	}
    
 
  }
}