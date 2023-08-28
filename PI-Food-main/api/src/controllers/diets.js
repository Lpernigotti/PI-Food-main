require('dotenv').config();
const axios = require('axios');
const {Diets} = require('../db');
const { API_KEY} = process.env;

const getDiets = async() => {
    
    try{
      const dietApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
      const diet = dietApi.data.results.flatMap((e)=> e.diets);
      const uniqueDiets = [...new Set(diet)]; // se eliminan los duplicados
      const transformedDiet = uniqueDiets.map((diet) => ({
        name: diet,
      }));
      Diets.bulkCreate(transformedDiet)
      console.log('Se han cargado los datos de las dietas desde la API');
    } catch(error){
    return {error: "Error al cargar las dietas desde la API"};
    }

  }
  
  module.exports = { getDiets };