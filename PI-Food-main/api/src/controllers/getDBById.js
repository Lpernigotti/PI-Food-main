const { Recipe, Diets } = require('../db');

const getDBById = async (id) => {
    return await Recipe.findByPk(id, {
        include:{
            model: Diets,
            attributes: ["name"],
            through: {
                attributes: []
            },
        },
    });
}

module.exports = { getDBById }; 