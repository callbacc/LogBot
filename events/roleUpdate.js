const { MessageEmbed } = require("discord.js");
const fs = require("fs");

module.exports = async (client, oldRole, newRole) => {
    if (oldRole.permissions !== newRole.permissions) {
        if (oldRole.permissions.toArray().length > newRole.permissions.toArray().length) {
            const server = client.guilds.cache.get("745623135763693648");
            const chan = server.channels.cache.get("745623135763693652");
            var lostperms = oldRole.permissions.toArray().filter((x) => !newRole.permissions.toArray().includes(x)).join(", ");
            const embed = new MessageEmbed()
                .setColor("#555555")
                .setTitle(`Role modified - ${newRole.name}`)
                .setDescription(`Permissions lost: \`${lostperms}\``);
            chan.send(embed);
            const data = `Lost Perms (${oldRole.name} - ${lostperms})` + "\n";
            fs.appendFile('./logs/roleUpdate.txt', data, (err) => {
                if(err) throw err;
            })
        } else {
            const server = client.guilds.cache.get("745623135763693648");
            const chan = server.channels.cache.get("745623135763693652");
            var gainedperms = newRole.permissions.toArray().filter((x) => !oldRole.permissions.toArray().includes(x)).join(", ");
            if(!gainedperms) return;
            const embed1 = new MessageEmbed()
                .setColor("#555555")
                .setTitle(`Role modified - ${newRole.name}`)
                .setDescription(`Permissions gained: \`${gainedperms}\``);
            chan.send(embed1);
            const data = `Gained Perms (${oldRole.name} - ${gainedperms})` + "\n";
            fs.appendFile('./logs/roleUpdate.txt', data, (err) => {
                if(err) throw err;
            })
        }
    }
}