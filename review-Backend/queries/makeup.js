const db = require('../db/dbConfig.js');


const getAllMakeup =  async () => {
    try {
        const allMakeup = await db.any("SELECT * FROM makeup");

        return allMakeup
    } catch (error) {
        return error
    }
}


module.exports ={
    getAllMakeup
}