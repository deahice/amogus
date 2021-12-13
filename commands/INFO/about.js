const discord  =require("discord.js")
module.exports  = {
name: "about",
aliases: ["info","botinfo","stats"], 
botPermission: ["EMBED_LINKS","USE_EXTERNAL_EMOJIS"],
run : async (client,message,args )=> {
  
  
  
  let embed  = new discord.MessageEmbed()
    
   .setColor("BLACK")
 .setAuthor(`${client.user.username} Information`,client.user.displayAvatarURL())
 
    
.addField(`
**DEVELOPER**`,
`Child Beater#9999`
`!    ΛL0NΞ  𓆩🍁𓆪`)

.addField(`
**HOSTING**`,
`Railway`)

.addField(`**PLATFORM**`,
`${process.platform}`)

.addField(`**SERVERS**`,
`${client.guilds.cache.size}`)

.addField(`**PING**`,
`${client.ws.ping}`)

.addField(`**GUILD ID**`,
`${message.guild.id}`)





message.channel.send(embed)
}}
