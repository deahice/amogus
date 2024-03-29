const { MessageEmbed } = require('discord.js')
const embed = require("../../overi/embed")
module.exports = {
  name: "join",
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: async (client, message, args) => {
 
 let player = client.manager.players.get(message.guild.id);

		// Check if bot has permission to connect to voice channel
		if (!message.member.voice.channel.permissionsFor(message.guild.me).has('CONNECT')) {
			return embed("<:error:888328080110800926> I need **connect** permission to join your voice channel", message.channel).then(m => m.delete({ timeout: 10000 }));
		}

		// Check if bot has permission to speak in the voice channel
		if (!message.member.voice.channel.permissionsFor(message.guild.me).has('SPEAK')) {
			return embed("<:error:888328080110800926> I need **speak** permission in your voice channel",message.channel).then(m => m.delete({ timeout: 10000 }));
		}

		// If no player create one and join channel
		if (!player) {
			try {
				player = client.manager.create({
					guild: message.guild.id,
					voiceChannel: message.member.voice.channel.id,
					textChannel: message.channel.id,
					selfDeafen: true,
				});
				await player.connect();
		embed("<a:yes:909104496318222387> Successfully joined your voice channel",message.channel)
		
			} catch (err) {
				embed(`error : ${err.message}`,message.channel)
			}
		} else {
			// Move the bot to the new voice channel / update text channel
			try {
				await player.setVoiceChannel(message.member.voice.channel.id);
				await player.setTextChannel(message.channel.id);
				const embed = new MessageEmbed()
					.setColor("BLACK")
					.setDescription("<a:yes:909104496318222387> Successfully join your voice channel");
				message.channel.send(embed);
			} catch (err) {
			embed(`Error: ${err.message}`,message.channel).then(m => m.delete({ timeout: 5000 }))
			}
		}
	}
};