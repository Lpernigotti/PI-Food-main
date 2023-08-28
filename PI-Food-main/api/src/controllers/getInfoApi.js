require('dotenv').config();
const axios = require('axios');
const {API_KEY} = process.env;



const getInfoApi = async () => {
    const  apiUrl = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    const infoApi = apiUrl.data.results
   
    const apiData = await infoApi.map((e) => {
      return {
        id: e.id,
        title: e.title, 
        summary: e.summary,
        healthScore: e.healthScore,
        image: e.image,
        diets: e.diets,
        steps: e.analyzedInstructions[0]?.steps.map((e) => { // steps se encuentra dentro de aI que es un array, lo mapeo y retorno lo que necesito d
          return {
            number: e.number,
            step: e.step
          };
        })
      };
    });
    return apiData;
  };

module.exports = { getInfoApi }