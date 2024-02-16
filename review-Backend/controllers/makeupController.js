const express = require('express')

const makeUp = express.Router()


makeUp.get("/", (req,res) => {
    res.status(200).json
    ({message: "MakeUP Home Page"})
})


makeUp.get("/:makeupID", (req, res) => {
    const makeupID = req.params.makeupID
if(Number(makeupID)){
    res.status(200).json({message : makeupID})
}
else{

    res.status(404).json({error: "id must be numeric"})
}})






module.exports = makeUp