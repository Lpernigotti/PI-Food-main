import {
    GET_RECIPES, 
    GET_BY_TITLE,
    CREATE_RECIPE,
    GET_DIETS,
    RECIPE_DETAIL,
    FILTER_BY_DIETS,
    FILTER_BY_ORIGIN,
    ORDER_AZ,
    ORDER_ZA,
    ORDER_HEALTHSCORE_ASC,
    ORDER_HEALTHSCORE_DES
                    } from '../actions/index';




let initialState = {allRecipes:[], recipesCopy:[], diets:[], recipeDetail:[]};

const reducer = (state = initialState,action) => {
    switch(action.type){
        case GET_RECIPES:
            return {
                ...state,
                allRecipes: action.payload,
                recipesCopy: action.payload
            }
        case GET_BY_TITLE:
            return {
                ...state,
                allRecipes: action.payload
            }
        
        case CREATE_RECIPE: 
        return {
            ...state,
            allRecipes: [...state.allRecipes, action.payload]
        };

        case GET_DIETS:
            return {
                ...state,
                diets: action.payload 
            }

        case RECIPE_DETAIL: 
            return {
            ...state,
            recipeDetail: action.payload
            
            }
        case FILTER_BY_DIETS:
           // console.log("Selected diets: ", action.payload)
        const filterDiet = state.recipesCopy.filter((recipe) => recipe.diets.some((diet) => diet === action.payload) )
            //console.log("Filtered recipes: ", filterDiet)
        
            return {
                ...state,
                allRecipes:
                action.payload === "AllRecipes"
                ? [...state.recipesCopy]
                : filterDiet
            }
        case FILTER_BY_ORIGIN:
            const origin = state.recipesCopy;
            if(action.payload === "all"){
                return {
                    ...state,
                    allRecipes: origin
                }
            } else if(action.payload === "existing"){
                const originApi = origin.filter((r) => typeof r.id === "number")
                return {
                    ...state,
                    allRecipes: originApi
                }
            }else if(action.payload === "created"){
                const originDb = origin.filter((r) => typeof r.id !== "number")
                return {
                    ...state,
                    allRecipes: originDb
                }
            }
            break;
        case ORDER_AZ:
            
            let orderAz = [...state.recipesCopy].sort((a,b)=> {
                if(a.title.toLowerCase() > b.title.toLowerCase()) return 1
                if(a.title.toLowerCase() < b.title.toLowerCase()) return -1
                return 0;
            })
            console.log("order az:",orderAz)
            return {
                ...state,
                allRecipes: orderAz
            }
        case ORDER_ZA:
            let orderZa = [...state.recipesCopy].sort((a,b) => {
                if(a.title.toLowerCase() > b.title.toLowerCase()) return -1
                if(a.title.toLowerCase() < b.title.toLowerCase()) return 1
                return 0
            })
        console.log( "order za: ",orderZa)
        return {
                ...state,
                allRecipes: orderZa
                
            }
        case ORDER_HEALTHSCORE_ASC:
          let orderAsc = [...state.recipesCopy].sort((a,b) => {
            if(a.healthScore > b.healthScore) return 1;
            if(a.healthScore < b.healthScore) return -1
            return 0
          })  
          console.log("orderAsc", orderAsc)
          return {
            ...state,
            allRecipes: orderAsc
          }
        case ORDER_HEALTHSCORE_DES:
            let orderDes = [...state.recipesCopy].sort((a,b) => {
                if(a.healthScore > b.healthScore) return -1;
                if(a.healthScore < b.healthScore) return 1
                return 0
            })
            console.log("healthscore desc:", orderDes)
            return {
                ...state,
                allRecipes: orderDes
            }

        default: return state
    }

}

export default reducer;