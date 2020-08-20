// Importing just what we need.
const { Client, Collection } = require("discord.js");
// Getting the config file.
const config = require("./config.json");
// Requiring fs
const fs = require("fs");
// Making our client
const client = new Client();
// Defining the commands and the aliases
["commands", "aliases"].forEach(x => client[x] = new Collection());
// Defining the categories.
client.categories = fs.readdirSync("./commands/");
// Getting the message and event handler.
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
// Starting the bot using the token from the config file.
client.login(config.token);
