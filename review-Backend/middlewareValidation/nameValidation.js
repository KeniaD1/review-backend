function checkName (req, res , next) {

    const name  = req.body.product_name

    if (typeof name === "string"){
        const nameArr = name.split(" ");

        const firstName = nameArr[0];

        const lastName = nameArr[1].toUpperCase();

        const firstNameLetter = firstName.charAt(0).toUpperCase()

        const restOfFirstName = firstName.slice(1).toLowerCase();

        const convertedFirstName = firstNameLetter + restOfFirstName

        req.body.name = `${convertedFirstName} ${lastName}`;

        next()

    }else {
        res.status(404).json({
            Error : "name must be a string "
        })
    }
}


module.exports ={
    checkName
}