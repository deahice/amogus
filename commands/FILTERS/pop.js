const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"pop",
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

if (!args[0]) {
	player.setEQ([{
                band: 0,
                gain: -0.25
            },
            {
                band: 1,
                gain: 0.48
            },
            {
                band: 2,
                gain: 0.59
            },
            {
                band: 3,
                gain: 0.72
            },
            {
                band: 4,
                gain: 0.56
            },
            {
                band: 5,
                gain: 0.15
            },
            {
                band: 6,
                gain: -0.24
            },
            {
                band: 7,
                gain: -0.24
            },
            {
                band: 8,
                gain: -0.16
            },
            {
                band: 9,
                gain: -0.16
            },
            {
                band: 10,
                gain: 0
            },
            {
                band: 11,
                gain: 0
            },
            {
                band: 12,
                gain: 0
            },
            {
                band: 13,
                gain: 0
            }
        ]);
        const msg = await message.channel.send(`<a:Loading:909335917779648512> Turning on **pop**.`);
			const embed = new MessageEmbed()
				.setDescription('<a:yes:909104496318222387> Turned on **pop**')
				.setColor("BLACK");
			await delay(2000);
			return msg.edit('', embed);
		}

		if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		player.setEQ(Array(13).fill(0).map((n, i) => ({
            band: i,
            gain: 0
        })));
		const msg = await message.channel.send(`<a:Loading:909335917779648512> Turning off **pop**.`);
			const embed = new MessageEmbed()
				.setDescription('<a:yes:909104496318222387> Turned off **pop**')
				.setColor("BLACK");
			await delay(2000);
			return msg.edit('', embed);
		}

	}
};