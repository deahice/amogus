const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("BLACK")
  .setDescription("" +""+ text);

    await channel.send(embed)
}