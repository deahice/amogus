module.exports = {
  name: "24/7",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
   
  aliases: ["247"],
  run: async (client, message, args) => {
   const player = message.client.manager.players.get(message.guild.id);
		if (!player) return message.channel.send({
		  embed: {
		    color: "BLACK",
		    description:'<:error:888328080110800926> There is nothing playing'}}).then(m => m.delete({ timeout: 5000 }));

		// Check that user is in the same voice channel
		const { channel } = message.member.voice

		 
		// toggle 24/7 mode off and on
		if (player.twentyFourSeven) {
			player.twentyFourSeven = false;
			return message.channel.send({
			  embed: {
			    color: "BLACK",
			    description:'<a:yes:909104496318222387> 24/7 mode is **disabled**'}});
		} else {
			player.twentyFourSeven = true;
			return message.channel.send({
			  embed: {
			    color: "BLACK",
			    description:'<a:yes:909104496318222387> 24/7 mode is **enabled**'}});
		}

  }
}