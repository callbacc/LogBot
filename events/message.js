const { MessageEmbed } = require("discord.js");
const config = require("../config.json");

module.exports = async (client, message) => {
    const prefix = config.prefix;
    try {
        if(message.channel.type === "dm") return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        const command = client.commands.get(cmd) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmd));
        if(!message.content.startsWith(prefix)) return;
        if(!message.member) message.member = message.guild.members.fetch(message);
        if(!command) return;
        if (command.args && !args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`;
            if (command.usage) {
                reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }
            return message.channel.send(reply);
        }
        try {
            await command.run(client, message, args);
        } catch (error) {
            console.log(error);
            let mebed = new MessageEmbed()
                .setColor("#FF0000")
                .setDescription(error.message);
            return message.channel.send(mebed);
        }
    } catch (error) {
        console.log(error);
        let smebed = new MessageEmbed()
            .setColor("#FF0000")
            .setDescription(error.message);
        return message.channel.send(smebed);
    }
}
