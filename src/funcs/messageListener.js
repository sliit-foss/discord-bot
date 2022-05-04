const client = require("../libs/client")
const exceptionHandler = require("../utils/exceptionHandler")

client.on("messageCreate", (message) => {
  const pairs = [
    {
      message: "hi",
      reply: "Welcome to the server!",
      userId: "",
    },
    {
      message: "miyuru",
      reply: "Miyuru playboy",
      userId: "<@683850851747627051>",
    },
    {
      message: "akalanka",
      reply: "Not Podi eka",
      userId: "<@558304590651719681>",
    },
    {
      message: "nisal",
      reply: "Naki rilawa",
      userId: "<@452748835819618317>",
    },
    {
      message: "sithum",
      reply: "Go deyyo",
      userId: "<@493946729213722626>",
    },
    {
      message: "chamod",
      reply: "Github Ayya",
      userId: "<@687876821198307338>",
    },
    {
      message: "kushantha",
      reply: "Figma Ayya",
      userId: "<@646729151063261184>",
    },
    {
      message: "bawantha",
      reply: "Bawwua Ayya",
      userId: "<@603809796038066178>",
    },
    {
      message: "fazid",
      reply: "Buru petiya",
      userId: "<@756482171815854123>",
    },
    {
      message: "kaputu kaak kaak kaak",
      reply: "Basil Basil Basil Basil",
      userId: "",
    },
    {
      message: "කපුටු කාක් කාක් කාක්",
      reply: "බැසිල් බැසිල් බැසිල් බැසිල්",
      userId: "",
    },
  ]

  pairs.forEach((pair) => {
    exceptionHandler(() => {
      if (message.content.toLowerCase() == pair.message)
        message.reply(`${pair.userId} ${pair.reply}`)

      if (message.content.toLowerCase() == pair.reply.toLowerCase())
        message.reply(`${pair.userId}`)
    })
  })
})
