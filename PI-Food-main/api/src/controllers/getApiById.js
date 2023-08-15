const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const getApiById = async (id) => {
    try {
       const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`) 
       
       console.log(data)
       
       return data
 
    } catch (error) {
       console.log(error)
      throw Error("Error al requerir informacion de la API") 
    }
}; 

module.exports = { getApiById };