const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const { logger } = require("./middlewares/logger")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/account", require("./routes/account.router"))

app.use((err, next, req, res) => {
    console.log(err);
    res.status(500).json({ message: "server error", error: err.message })
})
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})
