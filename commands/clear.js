module.exports = {
    name: 'clear',
    description: "",
    async execute(message,args){
      if(!args[0]) return message.reply("please enter the number of messages that you want to clear");
      if(isNaN(args[0])) return message.reply("illegal move. enter a real positive integer dummy")

      if(args[0]>100) return message.reply("illegal move. Max is 100 messages")
      if(args[0]<1) return message.reply("illegal move. Min is 1 message")
      
      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages)
      });
    }
}