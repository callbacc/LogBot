const fs = require("fs");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, oUser, nUser) => {
    if(oUser.discriminator !== nUser.discriminator) {
        const discrim = new MessageEmbed()
            .setColor("#03fc0f")
            .setTitle(`Discriminator updated - ${oUser.username}`)
            .setDescription(`Old Discriminator - ***${oUser.discriminator}***
            New Discriminator - ***${nUser.discriminator}***`);
        const server = client.guilds.cache.get("745623135763693648");
        const chan = server.channels.cache.get("745623135763693652");
        chan.send(discrim);
        const data = `Discriminator (${oUser.username} - ${oUser.discriminator} - ${nUser.discriminator})` + "\n";
        fs.appendFile('./logs/userUpdate.txt', data, (err) => {
            if(err) throw err;
        })
    }
    if(oUser.username !== nUser.username) {
        const uName = new MessageEmbed()
            .setColor("#03fc0f")
            //.setThumbnail(nUser.avatar)
            .setTitle(`Username updated - ${oUser.username}`)
            .setDescription(`Old Username - ***${oUser.username}***
            New Username - ***${nUser.username}***`);
        const server = client.guilds.cache.get("745623135763693648");
        const chan = server.channels.cache.get("745623135763693652");
        chan.send(uName);
        const data = `Username (${oUser.username} - ${nUser.username})` + "\n";
        fs.appendFile('./logs/userUpdate.txt', data, (err) => {
            if(err) throw err;
        })
    }
}