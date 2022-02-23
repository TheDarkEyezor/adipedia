const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    description: "",
    execute(message, Discord){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('HELP!')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setAuthor({ name: 'AdiPedia', iconURL: 'https://imgur.com/gallery/QYd6cFL', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })
        .setDescription('If I told you to take the L, would you? 🤔')
        .setThumbnail('https://imgur.com/gallery/QYd6cFL')
        .addFields(
            { name: 'Commands', value: 'No abusing them, or I slap you' },
            { name: '\u200B', value: '\u200B' },
            { name: 'dm', value: 'Tag someone after the command to dm them.', inline: true },
            { name: 'help', value: "If you didn't know this, how the hell did this message some up", inline: true },
        )
        .setImage('https://imgur.com/gallery/QYd6cFL')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://imgur.com/gallery/QYd6cFL' });
        message.reply(exampleEmbed)

    }
}