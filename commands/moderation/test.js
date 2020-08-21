module.exports = {
    name: "test",
    aliases: ["bal", "balance", "bank"],
    category: "fun",
    description: "Commit a crime.",
    usage: "[crime]",
    run: async (client, message, args) => {
        message.reply("s");
    }
}