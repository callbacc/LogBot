const { MessageEmbed } = require("discord.js");

module.exports = (client, reaction) => {
    const server = client.guilds.cache.get("745623135763693648");
    const chan = server.channels.cache.get("745623135763693652");
    const embed = new MessageEmbed()
        .setColor("#8B0000")
        .setTitle(`Reaction added`)
        .setDescription(`User: \`${reaction.message.author.username}\`
        Message ID: \`${reaction.message.id}\``);
    chan.send(embed);
}