const { MessageEmbed } = require("discord.js");

module.exports = (client, oldChannel, newChannel) => {
    const server = client.guilds.cache.get("745623135763693648");
    const chan = server.channels.cache.get("745623135763693652");
    const embed = new MessageEmbed()
        .setColor("#8B0000")
        .setTitle(`Channel modified`)
        .setDescription(`Old name: \`${oldChannel.name}\` - New name: \`${newChannel.name}\``);
    chan.send(embed);
}