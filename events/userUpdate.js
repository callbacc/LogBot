const { MessageEmbed, Message } = require("discord.js");
const message = require("./message");

module.exports = async (client, oUser, nUser) => {
    console.log(oUser);
    console.log(nUser);
    if(oUser.discriminator !== nUser.discriminator) {
        const discrim = new MessageEmbed()
            .setColor("#03fc0f")
            .setTitle(`Discriminator updated - ${oUser.User.username}`)
            .setDescription(`Old Discriminator - *${oUser.User.discriminator}*
            New Discriminator - *${nUser.User.discriminator}*`);
        const server = client.guilds.cache.find(guild => guild.id === "679772731201290261");
        const chan = server.channels.cache.find(channel => channel.id === "679785636496015383");
        chan.send(discrim);

    }
}