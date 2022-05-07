const { Router } = require("express")
const memberRouter = require("./member.routes")

const router = Router()

router.get("/", (req, res) => {
  res.status(200).json({ data: "Discord bot up and running" })
})

router.use("/member", memberRouter)

module.exports = router
