const { Recipe } = require('../db');
const {Op} = require('sequelize');

const infoByTitleDB = async (title) => {
    try {
        return await Recipe.findAll({
            where:{
                title: {
                    [Op.iLike]: `%${title}%`
                }
            },
            attributes: ['title']
        });
    } catch (error) {
        throw new Error("Error al buscar recetas en la base de datos");
    }
};

module.exports = { infoByTitleDB };