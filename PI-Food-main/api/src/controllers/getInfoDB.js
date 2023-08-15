const { Recipe, Diets } = require('../db');

const getInfoDB =  async () => {
    return await Recipe.findAll({
        include:{
            model: Diets,
            attributes: ['name'],
        },
    });
};

module.exports = {getInfoDB};