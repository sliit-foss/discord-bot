const client = require("../libs/client");

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase() == "hi") {
    message.reply("Welcome to the server!");
  } else if (message.content.toLowerCase() == "miyuru") {
    message.reply("<@683850851747627051> Miyuru playboy");
  } else if (message.content.toLowerCase() == "akalanka") {
    message.reply("<@558304590651719681> Not Podi eka");
  } else if (message.content.toLowerCase() == "nisal") {
    message.reply(`<@452748835819618317> Naki rilawa`);
  } else if (message.content.toLowerCase() == "sithum") {
    message.reply("<@493946729213722626> Go deyyo");
  } else if (message.content.toLowerCase() == "chamod") {
    message.reply("<@687876821198307338> Github Ayya");
  } else if (message.content.toLowerCase() == "kushantha") {
    message.reply("<@646729151063261184> Figma Ayya");
  } else if (message.content.toLowerCase() == "bawantha") {
    message.reply("<@603809796038066178> Bawwua Ayya");
  } else if (message.content.toLowerCase() == "fazid") {
    message.reply("<@756482171815854123> Buru petiya");
  }
});
