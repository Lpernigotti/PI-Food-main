require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');

const getInfoByTitle = async (title) => {
    try {
       const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&titleMatch=${title}&addRecipeInformation=true`);
        const searchResults = response.data.results.map(result => {
            return {
                id: result.id,
                title: result.title,
                summary: result.summary,
                healthScore: result.healthScore,
                image: result.image,
                diets: result.diets,
                steps: result.analyzedInstructions[0]?.steps.map((element) => {
                    return {
                        number: element.number,
                        step: element.step,
                        
                    };
                })
            }  
        });
        return searchResults;
    } catch (error) {
       throw new Error("Error al buscar recetas de la API");
    }
}

module.exports= {
    getInfoByTitle 
}