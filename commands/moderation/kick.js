const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    aliases: ["bal", "balance", "bank"],
    category: "fun",
    description: "Commit a crime.",
    usage: "[crime]",
    run: async (client, message, args) => {
        if(!message.member.permissions.has("KICK_MEMBERS")) return;
        let userToKick = message.mentions.users.first() || client.users.resolve(args[0]);
        let reason = args.slice(1).join(" ");
        if(!userToKick) return message.channel.send("I can't kick that person, because you didn't mention who.");
        if(userToKick == message.author) return message.channel.send("You can't kick yourself!");
        if(!reason) reason = "This is a default reason";
        if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("I don't have the permission \'KICK_MEMBERS\'!");
        message.guild.member(userToKick).kick(reason);

        const embed = new MessageEmbed()
            .setColor("#8B0000")
            .setTitle(`Player kicked - ${userToKick}`)
            .setDescription(`${userToKick} - ${reason}`);
        message.channel.send(embed);
    }
}