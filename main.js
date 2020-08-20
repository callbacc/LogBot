// Importing just what we need.
const { Client, Collection } = require("discord.js");
// Getting the config file.
const config = require("./config.json");
// Making our client
const client = new Client();
// Starting the bot using the token from the config file.
client.login(config.token);
