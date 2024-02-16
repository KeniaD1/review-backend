const express = require("express")
const app = express()
const cors = require("cors")

const makeUpController = require("./controllers/makeupController")

app.use(express.json())
app.use(cors())
app.use("/makeup", makeUpController)


app.get("/", (req, res) => {
    res.status(200).send("<h1>Test Backend Server</h1>")
})

app.get("*", (req, res) => {
    res.status(404).json({
        Error: "Page Not Found"
    })
})


module.exports = app