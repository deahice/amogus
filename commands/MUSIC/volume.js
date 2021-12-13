const { MessageEmbed } = require('discord.js')
const embed = require("../../overi/embed")
module.exports = {
  name: "volume",
  vcOnly:true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: (client, message, args) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

  if (!player) {
    let embed = new MessageEmbed()
      .setColor("BLACK")
      .setDescription("<:error:888328080110800926> There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  
  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<:error:888328080110800926> Must be in same voice channel`)
    return message.channel.send(embed)
  }
  if (!args.length) {
    let embed = new MessageEmbed()
      .setColor("BLACK")
      
      .setDescription(`<:error:888328080110800926> Please Provide me volume between 1 to 100 `)
  
    return message.channel.send(embed)
  }

  if (isNaN(args[0])) {
    let embed = new MessageEmbed()
      .setColo("BLACK")
      .setDescription("<:error:888328080110800926> That is not a vaild number")
    return message.channel.send(embed)
  }

  if (args[0] < 1 || args[0] > 100) {
    let embed = new MessageEmbed()
      .setColor("BLACK")
      .setDescription("<:error:888328080110800926> Volume should be 1 to 100")
    return message.channel.send(embed)
  }

  const volume = Number(args[0])

  player.setVolume(volume)
  return message.channel.send(
    {
      embed: {
        color: "BLACK",
      description:`<a:yes:909104496318222387> Volume set to ${args[0]}`,}})
}}