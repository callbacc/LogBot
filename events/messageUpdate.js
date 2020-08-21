const { MessageEmbed } = require("discord.js");

module.exports = (client, oldMessage, newMessage) => {
    if(oldMessage !== newMessage) {
        if(oldMessage.author.bot) return;
        const server = client.guilds.cache.get("745623135763693648");
        const chan = server.channels.cache.get("745623135763693652");
        const embed = new MessageEmbed()
            .setColor("#555555")
            .setTitle(`Message Edited`)
            .setFooter(oldMessage.author.id)
            .setDescription(`Old message: \`${oldMessage.content}\` - New message: \`${newMessage.content}\``);
        chan.send(embed);
    }
} 