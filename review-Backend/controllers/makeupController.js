const express = require('express')

const makeUp = express.Router()

const { checkName } = require("../middlewareValidation/nameValidation")

const { instockCheck } = require('../middlewareValidation/instockCheck')

const {  getAllMakeup , getOneMakeup, updateMakeup } = require('../queries/makeup')


makeUp.get("/", async (req, res) => {
    const allMakeup = await getAllMakeup()
    res.status(200).json(allMakeup)
})


makeUp.get("/:makeupID", async (req, res) => {
    const makeupID = req.params.makeupID
    if (Number(makeupID)) {
        const oneMakeup = await getOneMakeup(makeupID)
        res.status(200).json(oneMakeup)
    }
    else {

        res.status(404).json({ error: "id must be numeric" })
    }
})


makeUp.post("/", checkName, instockCheck, (req, res) => {
    const body = req.body
    // console.log(body)
    res.status(200).json(body)

})

makeUp.put('/:makeupID', checkName, async (req, res) => {
    const makeupID = req.params.makeupID

    const body = req.body

    const updatedMakeup = await updateMakeup(makeupID, body)

    if(updatedMakeup.id){

    res.status(200).json(updatedMakeup)
    }else{
        res.status(404).json({error: updatedMakeup})
    }
})



makeUp.delete("/:makeupID", (req, res) => {

    const makeupID = req.params.makeupID

    if (Number(makeupID)) {
        res.status(200).json({ message: `delete ${makeupID}` })
    }
    else {

        res.status(404).json({ error: " makeup id must be numeric" })
    }
})






module.exports = makeUp