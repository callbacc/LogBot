const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "lockdown",
    aliases: ["bal", "balance", "bank"],
    category: "fun",
    description: "Commit a crime.",
    usage: "[crime]",
    run: async (client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        message.channel.overwritePermissions([
            {
                id: message.channel.id,
                deny: ['SEND_MESSAGES'],
            },
        ], 'Needed to change permissions');
        message.channel.send("Lockdown activated!");
    }
}