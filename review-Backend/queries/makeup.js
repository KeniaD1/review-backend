const db = require('../db/dbConfig.js');

//get all
const getAllMakeup = async () => {
    try {
        const allMakeup = await db.any("SELECT * FROM makeup");

        return allMakeup
    } catch (error) {
        return error
    }
}

//get one 

const getOneMakeup = async (makeupId) => {
    try {
        //  db.one
        const oneMakeup = await db.one("SELECT * FROM makeup WHERE id=$1", makeupId)
        return oneMakeup
    } catch (error) {
        return error
    }
}
// get update 
const updateMakeup = async (makeupId, body) => {

    try {
        const updatedMakeup = await db.one("UPDATE makeup SET product_name=$1 , price=$2, instock=$3, color=$4 WHERE id=$5 RETURNING *", [body.product_name,
        body.price, body.instock, body.color, makeupId])
        return updatedMakeup

    } catch (error) {
        return error
    }
}


const deleteMakeup = async (makeupId) => {

    
    try {
        const deletedMakeup = db.one("DELETE FROM makeup WHERE id=$1 RETURNING *", makeupId)
        return deletedMakeup

    } catch (error) {
        return error
    }


}



module.exports = {
    getAllMakeup,
    getOneMakeup,
    updateMakeup,
    deleteMakeup
}