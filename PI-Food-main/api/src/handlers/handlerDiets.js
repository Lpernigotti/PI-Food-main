const { Diets } = require('../db');
const {getDiets} = require('../controllers/diets');

const dietsHandler = async (req,res) => {
    try {
        const diet = await getDiets();
       const allDiets = await Diets.findAll();

       res.status(200).json(allDiets) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = { dietsHandler };