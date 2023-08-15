const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER 
    },
    steps: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://c4.wallpaperflare.com/wallpaper/338/328/1011/comida-hindu-platos-salsas-wallpaper-preview.jpg'
    }
  });
};