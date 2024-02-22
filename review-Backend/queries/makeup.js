const db = require('../db/dbConfig.js');

//get all
const getAllMakeup =  async () => {
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

module.exports ={
    getAllMakeup,
    getOneMakeup
}