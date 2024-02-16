const express = require('express')

const makeUp = express.Router()


makeUp.get("/", (req,res) => {
    res.status(200).json
    ({message: "MakeUP Home Page"})
})

module.exports = makeUp