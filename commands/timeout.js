module.exports = {
    name: 'timeout',
    description: "times out user",
    minArgs: 2,
    expectedArgs:"<Target user's @> <The >",
    execute(message){
      const targetUser = message.mentions.users.first()
      if (!targetUser){
        message.reply("Please specify which bodoh")
        return
      }

      const { guild } = message
      const member = guild.members.cache.get(targetUser.id)
      var role= member.guild.roles.cache.find(role => role.id === '927581504996007988');
      member.roles.add(role);
      message.reply(`The user now has the " ${role} "`)

    }
}