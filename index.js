const Discord = require("discord.js")

const TOKEN = "ODQ5NzEzMTI2NzU2NTgxMzk2.YLfLBA.yxGGSe9jtDcHcABjDc7Ck8eQHmk"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Retards")
    }
})
client.login("ODQ5NzEzMTI2NzU2NTgxMzk2.YLfLBA.yxGGSe9jtDcHcABjDc7Ck8eQHmk")