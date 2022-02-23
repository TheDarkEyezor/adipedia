const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
module.exports = {
    name: 'play',
    description: "",
    async execute(message,args){
      const voice_channel = message.member.voice.channel;
      if(!voice_channel) return message.channel.send('First enter a voice channel doofus');
      const permissions = voice_channel.permissionFor(message.client.user);
      if(!permissions.has('CONNECT') || !permissions.has('SPEAK')) return message.channel.send("You don't have the right perms, genius");

      const server_queue = queue.get(message.guild.id);

      if(cmd === 'play'){
        if(!args.length) return message.channel.send('You need the second argument')
        let song = {};

        if(ytdl.validateURL(args[0])){
          const song_info = await ytdl.getInfo(args[0]);
          song = { title:song_info.videoDetails.title, url: song_info.videoDetails.video_url }
        } else{
          const video_finder = async (query) =>{
            const videoResult = await ytSearch(query);
            return (videoResult.videos.length > 1) ? videoresult.videos[0] : null;
          }

          const video = await video_finder(args.join(''));
          if (video){
            song = { title: video.title, url: video.url }
          } else {
            message.channel.send('Error finding video');
          }
        }
      }

      if(!server_queue){

        const queue_constructor = {
          voice_channel: voice_channel,
          text_channel: message.channel,
          connection: null,
          songs: []
        }

        queue.set(message,guild.id, queue_constructor);
        queue_constructor.songs.push(song);

        try{
          const connection = await voice_channel.join();
          queue_constructor.connection = connection;
          video_player(message.guild, queue_constructor.songs[0]);
        } catch(err) {
          queue.delete(message.guild.id);
          message.channel.send('There was an error connecting!');
          throw err;
        }

      }
    }
}