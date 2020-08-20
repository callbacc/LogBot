const fs = require("fs")

module.exports = async (client, oUser, nUser) => {
    if(oUser.discriminator !== nUser.discriminator) {
        const discrim = new MessageEmbed()
            .setColor("#03fc0f")
            .setTitle(`Discriminator updated - ${oUser.username}`)
            .setDescription(`Old Discriminator - *${oUser.discriminator}*
            New Discriminator - *${nUser.discriminator}*`);
        const server = client.guilds.cache.get("745623135763693648");
        const chan = server.channels.cache.get("745623135763693652");
        chan.send(discrim);
        const data = `${oUser.username} - ${oUser.discriminator} - ${nUser.discriminator}`;
        fs.writeFile('../logs/userUpdate.txt', data, (err) => {
            if(err) throw err;
        })
    }
}