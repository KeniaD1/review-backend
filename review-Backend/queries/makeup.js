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
        const updatedMakeup = await db.one("UPDATE makeup SET product_name=$1 , price=$2, instock=$3, color=$4 image_url=$5 WHERE id=$6 RETURNING *", [body.product_name,
        body.price, body.instock, body.color, body.image_url, makeupId])
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

const createMakeup = async (valueObj) => {

    try {

        const newMakeup = await db.one("INSERT INTO makeup (product_name,price,instock,color , image_url) VALUES ($1,$2,$3,$4,$5) RETURNING * ", [valueObj.product_name, valueObj.price, valueObj.instock, valueObj.color, valueObj.image_url])
        return newMakeup
    } catch (error) {
        return error
    }

}



module.exports = {
    getAllMakeup,
    getOneMakeup,
    updateMakeup,
    deleteMakeup,
    createMakeup
}