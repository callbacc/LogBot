const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    aliases: ["bal", "balance", "bank"],
    category: "fun",
    description: "Commit a crime.",
    usage: "[crime]",
    run: async (client, message, args) => {
        if(!message.member.permissions.has("BAN_MEMBERS")) return;
        let userToBan = message.mentions.users.first() || client.users.resolve(args[0]);
        let reason = args.slice(1).join(" ");
        if(!userToBan) return message.channel.send("I can't ban that person, because you didn't mention who.");
        if(userToBan == message.author) return message.channel.send("You can't ban yourself!");
        if(!reason) reason = "This is a default reason";
        if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I don't have the permission \'BAN_MEMBERS\'!");
        message.guild.member(userToBan).ban();

        const embed = new MessageEmbed()
            .setColor("#8B0000")
            .setTitle(`Player banned - ${userToBan}`)
            .setDescription(`${userToBan} - ${reason}`);
        message.channel.send(embed);
    }
}