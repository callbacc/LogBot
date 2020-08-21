const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
    const server = client.guilds.cache.get("745623135763693648");
    const chan = server.channels.cache.get("745623135763693652");
    const embed = new MessageEmbed()
        .setColor("#8B0000")
        .setTitle(`User left`)
        .setDescription(`User: \`${member.user.username}\``);
    chan.send(embed);
}