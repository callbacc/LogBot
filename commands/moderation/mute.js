const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "mute",
    aliases: ["bal", "balance", "bank"],
    category: "fun",
    description: "Commit a crime.",
    usage: "[crime]",
    run: async (client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        let userToCheck = message.mentions.users.first();
        let muterole = message.guild.roles.cache.find(muterole => muterole.name === "Muted");
        userToCheck.roles.add(muterole);
        return message.channel.send(`${userToCheck.username} has been muted forever.`);
    }
}