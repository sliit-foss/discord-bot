const client = require("../libs/client");
const generateImage = require("../utils/generateImage");

const welcomeChannelId = process.env.WELCOME_CHANNEL_ID;

client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member);
  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `${member} Welcome to the  SLIIT FOSS Community server!`,
    files: [img],
  });
});
