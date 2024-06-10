const router = require("express").Router()
const accountController = require("./../controllers/account.controller")

router
    .post("/credit", accountController.credit)
    .post("/debit", accountController.debit)

module.exports = router