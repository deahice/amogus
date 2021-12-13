
const { default_prefix } = require("../../config.json")
const embed = require("../../paras/embed")
module.exports = {
  name: "prefix",
  category: "moderation",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 userPermission: ["MANAGE_GUILD"],
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    
    if(!args[0]) {
      return embed("<:error:888328080110800926> Please give the prefix that you want to set", message.channel)
    } 
    
    if(args[1]) {
      return embed("<:error:888328080110800926> You can not set prefix as a double argument",message.channel )
    }
    
    if(args[0].length > 3) {
      return embed("<:error:888328080110800926> You cannot set the prefix more than 3 characters",message.channel)}
    
    if(args.join("") === default_prefix) {
      client.db.delete(`prefix_${message.guild.id}`)
     return await embed("<a:yes:909104496318222387> Reset Prefix ", message.channel)
    }
    
    client.db.set(`prefix_${message.guild.id}`, args[0])
  await embed(`<a:yes:909104496318222387> Set Bot's Prefix to ${args[0]}`,message.channel)
    
  }
}