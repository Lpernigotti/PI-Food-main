const { getDiets } = require('../controllers/diets');
const { Diets } = require('../db');
//const {getDiets} = require('../controllers/diets');

const dietsHandler = async (req,res) => {
    try {
    
       const allDiets = await Diets.findAll();
       if(allDiets.length === 0) {
        await getDiets()
       }
       const dbDiets = await Diets.findAll()
       
       res.status(200).json(dbDiets) 
       
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = { dietsHandler };