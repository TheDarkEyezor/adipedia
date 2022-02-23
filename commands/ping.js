module.exports = {
    name: 'ping',
    description: "",
    execute(message){
        message.channel.send("hello, dummy");
    }
}