const discord  =  require("discord.js")
module.exports = {
  name: "help",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("BLACK")
 .setAuthor("Help Menu",client.user.displayAvatarURL())
 .setURL(`https://github.com/parasop/NEW-MUSIC-BOT`)
.setDescription(`
**<a:yes:909104496318222387> Everyone comammds <a:yes:909104496318222387>**
\`clear\` | \`join\` | \`nowplaying\` | \`pause\` | \`play\` | \`queue\` | \`resume\` | \`search\` | \`skip\` | \`stop\` | \`volume\`

**<a:yes:909104496318222387> Filters commands <a:yes:909104496318222387>**
\`24/7\` | \`radio\` | \`bassboost\` | \`deepbass\` | \`earrape\` | \`nightcore\` | \`pitch\` | \`pop\` | \`reset\` | \`soft\` | \`speed\` | \`television\` | \`vaporwave\`

**<a:yes:909104496318222387> Utility commands <a:yes:909104496318222387>**
\`about\` | \`prefix\` | \`ping\` | \`lavalink\` | \`uptime\` | \`invite\` 

[Support Server](https://discord.gg/Br8DguRBvm)`)
.setFooter("Made by Child Beater and Alone")
message.channel.send(embed)
  }
}
