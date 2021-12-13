const discord  = require("discord.js")
const delay = require('delay');
const { MessageEmbed} = require("discord.js")

module.exports = {
  name:"vaporwave",
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
  const m1 = await message.channel.send("<a:Loading:909335917779648512> Turning on **vaporwave**.")


	// Change bassboost value
	player.setVaporwave(!player.Vaporwave)
	 const bass = new MessageEmbed()
 .setTitle("<a:yes:909104496318222387> Turned on : **vaporwave**")
            .setColor('#000000');

        await delay(2000);
        m1.edit('', bass);
  
  
  
  	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(`<a:Loading:909335917779648512> Turning off **vaporwave**.`);
			const embed = new MessageEmbed()
				.setDescription('<a:yes:909104496318222387> Turned off **vaporwave**')
				.setColor("BLACK");
			await delay(2000);
			return msg.edit('', embed);
    	}
         
  }
}	