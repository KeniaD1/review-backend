function instockCheck(req, res, next) {

    const instock = req.body.instock

    if (instock === true) {

        // res.status(200).json({
        //     message: "client is registered"
        // })

        next()
    } else {
        res.status(200).json({
            message: "item not instock  "
        })
    }

}


module.exports = {
    instockCheck
}