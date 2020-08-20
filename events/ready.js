const { MessageEmbed } = require("discord.js");

module.exports = async (client) => {
    try {
        await client.user.setPresence({
            activity: {
                name: '.help | public beta'
            },
            status: 'listening'
        })
        console.log(`--------------------------------`);
        console.log(`${client.user.username} is now ready to rock!`);
        console.log(`--------------------------------`);
    } catch (error) {
        console.log(error);
    }
}
