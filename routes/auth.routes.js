const router = require("express").Router()
const authController = require("./../controllers/auth.controller")

router
    .post("/Register", authController.registerUser)
    .post("/Login", authController.loginUser)

module.exports = router