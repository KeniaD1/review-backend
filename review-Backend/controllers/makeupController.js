const express = require('express')

const makeUp = express.Router()

const { checkName } = require("../middlewareValidation/nameValidation")

const { instockCheck } = require('../middlewareValidation/instockCheck')

const { getAllMakeup, getOneMakeup, updateMakeup, deleteMakeup, createMakeup } = require('../queries/makeup.js')


makeUp.get("/", async (req, res) => {
    const allMakeup = await getAllMakeup()
    if (allMakeup[0]) {
        res.status(200).json(allMakeup);
    } else {
        res.status(500).json({ error: "error",  });
    }
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


makeUp.post("/", checkName, async (req, res) => {
    const body = req.body
    // console.log(body)

    const newMakeup = await createMakeup(body)

    if (newMakeup.id) {
        res.status(200).json(newMakeup)
    } else {
        res.status(500).json(newMakeup)
    }
})

makeUp.put('/:makeupID', checkName, async (req, res) => {
    const makeupID = req.params.makeupID

    const body = req.body

    const updatedMakeup = await updateMakeup(makeupID, body)

    if (updatedMakeup.id) {

        res.status(200).json(updatedMakeup)
    } else {
        res.status(404).json({ error: updatedMakeup })
    }
})



makeUp.delete("/:makeupID", async (req, res) => {

    const makeupID = req.params.makeupID

    if (Number(makeupID)) {

        const deletedMakeup = await deleteMakeup(makeupID)

        if (deletedMakeup.id) {
            res.status(200).json(deletedMakeup)
        } else {
            res.status(404).json(deletedMakeup)

        }
    } else {

        res.status(404).json({ error: " makeup id must be numeric" })

    }
})






module.exports = makeUp