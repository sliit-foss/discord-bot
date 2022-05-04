const Discord = require("discord.js")
const { Intents } = require("discord.js")

const client = new Discord.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
})

client.login(process.env.DISCORD_TOKEN)

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

module.exports = client
