const { Router } = require("express")
const memberController = require("../controllers/member.controller")

const router = Router()

router.get("/count", memberController.getMemberCount)

module.exports = router
