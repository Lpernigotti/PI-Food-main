import axios from "axios"

export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_BY_TITLE = "GET_BY_TITLE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const RECIPE_DETAIL = "RECIPE_DETAIL";
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA";
export const ORDER_HEALTHSCORE_ASC = "ORDER_HEALTHSCORE_ASC";
export const ORDER_HEALTHSCORE_DES = "ORDER_HEALTHSCORE_DESC";

export function getRecipes(){
    return async function(dispatch){
        const response = await axios('http://localhost:3001/recipes')
        return dispatch({
            type: 'GET_RECIPES',
            payload: response.data
        })
    }
}

export function getDiets() {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/diets')
        return dispatch({
            type: 'GET_DIETS',
            payload: response.data
        })
    }
}

export function getByTitle (title) {
    return async function(dispatch) {
        const response = await axios(`http://localhost:3001/recipes/?title=${title}`)
        return dispatch({
            type: 'GET_BY_TITLE',
            payload: response.data
        })
    }
}

export function createRecipe (value) {
    return async function(dispatch) {
       try {
           const response = await axios
           .post("http://localhost:3001/recipes/", value)
              return dispatch({
                   type: CREATE_RECIPE,
                   payload: response.data
               });
        
       } catch (error) {
        console.log("Error creating recipe: ", error)
       }
    };
}

export function recipeDetail (id) {
    return async function(dispatch){
       const response = await axios.get(`http://localhost:3001/recipes/${id}`)
       console.log(response)
       return dispatch({
        type: RECIPE_DETAIL,
        payload: response.data
       })
    }
    
}

export function filterDiets(diets){
    return {
        type: FILTER_BY_DIETS,
        payload: diets
    }
}

export function filterOrigin(payload){
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
}

export function orderAZ(payload){
    return {
        type: ORDER_AZ,
        payload
    }
}

export function orderZA(payload) {
    return {
        type: ORDER_ZA,
        payload
    }
}

export function orderHealthScoreAsc(){
    return {
        type: ORDER_HEALTHSCORE_ASC
    }
}

export function orderHealthScoreDesc(){
    return {
        type:ORDER_HEALTHSCORE_DES
    }
}