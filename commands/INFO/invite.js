const discord  =  require("discord.js")
module.exports = {
  name: "invite",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("BLACK")
 .setAuthor("INVITE OVERI",client.user.displayAvatarURL())
.setDescription(`

[INVITE ME](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)

[SUPPORT SERVER](https://discord.gg/Br8DguRBvm)
`)
message.channel.send(embed)


}}
