const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "userinfo",
    aliases: ["bal", "balance", "bank"],
    category: "fun",
    description: "Commit a crime.",
    usage: "[crime]",
    run: async (client, message, args) => {
        let userToCheck = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;
        const date = new Date(userToCheck.createdTimestamp).toLocaleString();
        let embed = new MessageEmbed()
            .setColor("#8B0000")
            .setTitle(userToCheck.username)
            .setThumbnail(userToCheck.displayAvatarURL())
            .addField(`Created at: `, `${date}`, true)
            .addField(`ID: `, `${userToCheck.id}`, true)
            .addField(`Last Message Channel ID: `, `${userToCheck.lastMessageChannelID}`, true)
            .addField(`Last Message ID: `, `${userToCheck.lastMessageID}`, true)
            .addField(`Discriminator: `, `${userToCheck.discriminator}`, true);
            console.log(userToCheck.presence);
        message.channel.send(embed);
    }
}