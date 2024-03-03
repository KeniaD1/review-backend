function checkName (req, res , next) {

    const name  = req.body.product_name

    if (typeof name === "string"){
        const nameArr = name.split(" ");

        let formattedNameArr = []

        for ( let name of nameArr) {
            const firstNameLetter = name.charAt(0).toUpperCase();
            const restOfFirstName = name.slice(1).toLowerCase();
            const formattedName = firstNameLetter + restOfFirstName
            formattedNameArr.push(formattedName);
        
        }
     req.body.product_name = formattedNameArr.join(" ")


        
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