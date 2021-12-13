const discord  = require("discord.js")
const delay = require('delay');
const { MessageEmbed} = require("discord.js")
module.exports = {
  name:"speed",
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
if (!player.queue.current.isSeekable) {
			return message.channel.send('<:error:888328080110800926> I cannot do the **speed** command in live streams');
		}

		// Make sure Number is a number
		if (isNaN(args[0])) {
			return message.channel.send('<:error:888328080110800926> Speed must be a number');
		}

		// Make sure number is between 1 and 10
		if (args[0] < 0 || args[0] > 10) {
			return message.channel.send('<:error:888328080110800926> Number must be betwern 1 to 10');
		}

		// Change speed value
		try {
			player.setSpeed(args[0]);
			message.channel.send({embed : {
			  color: "BLACK",
			  description:`<a:yes:909104496318222387> Speed is ${player.speed}`}});
		} catch (err) {
			if (message.deletable) message.delete();
			console.log(`Command: '${this.help.name}' has error: ${err.message}.`);
		
		}
    
  	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(`<a:Loading:909335917779648512> Turning off **speed**.`);
			const embed = new MessageEmbed()
				.setDescription('<a:yes:909104496318222387> Turned off **speed**')
				.setColor("BLACK");
			await delay(2000);
			return msg.edit('', embed);
    	}
      
    
  }
}