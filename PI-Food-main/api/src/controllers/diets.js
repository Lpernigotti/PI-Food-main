require('dotenv').config();
const axios = require('axios');
const {Diets} = require('../db');
const { API_KEY} = process.env;

const getDiets = async() => {
    const dietDB = await Diets.findByPk(1) 
    if(!dietDB){
      const dietApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
      const diet = dietApi.data.results.flatMap((e)=> e.diets);
      const arr = new Set(diet); // se eliminan los duplicados
      const dietas = [...arr,"vegetarian"];
      dietas.forEach((el) => {
        Diets.findOrCreate({
          where: { name: el },
        })
      })
      console.log('Se han cargado los datos de las dietas desde la API');
    } else{
      console.log('Los datos de las dietas ya están cargados en la base de datos');
    }

  }
  
  module.exports = { getDiets };