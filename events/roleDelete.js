const { MessageEmbed } = require("discord.js");

module.exports = (client, role) => {
    const server = client.guilds.cache.get("745623135763693648");
    const chan = server.channels.cache.get("745623135763693652");
    const embed = new MessageEmbed()
        .setColor("#8B0000")
        .setTitle(`Role deleted`)
        .setDescription(`Name: ${role.name}`);
    chan.send(embed);
}