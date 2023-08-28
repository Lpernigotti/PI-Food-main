



import axios from "axios";
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
//export const RECIPES_PAGING = "RECIPES_PAGING";
//export const GO_TO_PAGE = "GO_TO_PAGE";
//export const FILTER_RECIPE_SUCCESS = "FILTER_RECIPE_SUCCESS";
//export const ORDER_RECIPE_SUCCESS  = "ORDER_RECIPE_SUCCESS";


//const itemsPerPage = 9;

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

//export function recipesPaging (recipes) {
    
  //   const totalPages = Math.ceil(recipes.length / itemsPerPage)
    // return {
      //  type: RECIPES_PAGING,
        //payload: {
          //  recipes,
            //totalPages
        //}
     //}
//}

//export function goToPage (pageNumber) {
  //  return {
    //    type: GO_TO_PAGE,
      //  payload: pageNumber
    //}
//}

//export function filterRecipesSuccess ( recipesFiltered) {
    
  //  const totalPages = Math.ceil(recipesFiltered.length/ itemsPerPage)
    //return {
      //  type: FILTER_RECIPE_SUCCESS,
        //payload: {
          //  recipesFiltered,
            //totalPages
        //}
    //}
//}

//export function orderRecipeSuccess (recipeOrdered) {
  //  const totalPages = Math.ceil(recipeOrdered.length / itemsPerPage)
    //return {
      //  type: ORDER_RECIPE_SUCCESS,
        //payload: {
          //  recipeOrdered,
            //totalPages
        //}
    //}
//}

//export function loadInitialPage() {
  //  return (dispatch, getState) => {
    //  const { allRecipes } = getState(); // Obtener las recetas del estado
      //dispatch(recipesPaging(allRecipes)); // Despachar recipesPaging con las recetas actuales
    //};
  //}