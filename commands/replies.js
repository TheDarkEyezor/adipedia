module.exports = {
    name: 'replies',
    description: "",
    execute(message, ufat){
      if(message.author.bot) return;
      var sentence = message.content.toLowerCase();
      if(sentence.includes("bored")){
          var replies = Array("You're bored? Find better friends", "How lonely are you?", "Go talk with you significant other....unless you're single");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } else if(sentence.includes("tok")){
          var replies = Array("Who told you to take IB?", "If you have rajeev, I pity you", "HAHHAHA go write your mock essay");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } else if ((sentence.includes("nvm") || sentence.includes("nevermind")) && ufat){
          var replies = Array("stop being a sanika", "Sanika vibes", "if you say something, complete it", "TELL US NOW");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } else if((sentence.includes("interesting") || sentence.includes("intriguing") || sentence.includes("kys"))){
          var replies = Array("stop being an aditya", "you have problems", "if you're not contributing to the convo, just leave");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } else if((sentence.includes("omg") || sentence.includes("fuck you") || message.content.includes("fuck off"))){
          var replies = Array("stop being an apurva");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } else if(sentence.includes("ur mom") || sentence.includes("your mom") || sentence.includes("ur dad") || sentence.includes("your dad")){
          var replies = Array("At least I have one", "At least mine loves me");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } else if(sentence.includes("no u")||sentence.includes("nou")){
        message.channel.reply("no u")
      } else if(sentence.includes("!")){
          var replies = Array("amazing!", "I care so much", "Great. Now time to look for the person who asked.....oh wait", "do you have nothing else to do?");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } else if((sentence.includes("aryaman")&& ufat)){
          message.reply("Osheen :heart: this message");
      } else if(sentence.includes("yenna")){
          var replies = Array("yenna!!", "are you sure you know how tamil works?");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } else if(sentence.includes("really?")){
          var replies = Array("yeah, really", "Seriously?", "bruh, I didn't even know that", "istg i didn't know", "damn, interesting");
          var reply = replies[Math.floor(Math.random()*replies.length)];
          message.channel.send(reply);
      } 
      

    }
}