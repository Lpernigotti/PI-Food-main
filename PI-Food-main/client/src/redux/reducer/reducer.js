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
    ORDER_HEALTHSCORE_DES,
    //RECIPES_PAGING,
    //GO_TO_PAGE,
    //FILTER_RECIPE_SUCCESS,
    //ORDER_RECIPE_SUCCESS,
                    } from '../actions/index';




let initialState = {allRecipes:[], recipesCopy:[], diets:[], recipeDetail:[],  totalPages: 0 , currentPage: 1};

//const itemsPerPage = 9;

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
        //const newTotalPagesDiets = Math.ceil(filterDiet.length / itemsPerPage)
            return {
                ...state,
                allRecipes:
                action.payload === "AllRecipes"
                ? [...state.recipesCopy]
                : filterDiet,
               // totalPages: newTotalPagesDiets,
                
            }
        case FILTER_BY_ORIGIN:
            const origin = state.recipesCopy;
           // const newTotalPagesOrigin = Math.ceil(origin.length / itemsPerPage)
            if(action.payload === "all"){
                return {
                    ...state,
                    allRecipes: origin,
                   // totalPages: newTotalPagesOrigin
                }
            } else if(action.payload === "existing"){
                const originApi = origin.filter((r) => typeof r.id === "number")
                return {
                    ...state,
                    allRecipes: originApi,
                    //totalPages: newTotalPagesOrigin
                }
            }else if(action.payload === "created"){
                const originDb = origin.filter((r) => typeof r.id !== "number")
                return {
                    ...state,
                    allRecipes: originDb,
                   // totalPages: newTotalPagesOrigin
                }
            }
            break;
        case ORDER_AZ:
            
            let orderAz = [...state.allRecipes].sort((a,b)=> {
                if(a.title.toLowerCase() > b.title.toLowerCase()) return 1
                if(a.title.toLowerCase() < b.title.toLowerCase()) return -1
                return 0;
            })
           // const newTotalPagesOrderAZ = Math.ceil(orderAz.length / itemsPerPage)
            console.log("order az:",orderAz)
            return {
                ...state,
                allRecipes: orderAz,
                //totalPages: newTotalPagesOrderAZ,
              //  currentPage: 1
            }
        case ORDER_ZA:
            let orderZa = [...state.allRecipes].sort((a,b) => {
                if(a.title.toLowerCase() > b.title.toLowerCase()) return -1
                if(a.title.toLowerCase() < b.title.toLowerCase()) return 1
                return 0
            })
            //const newTotalPagesOrderZA =  Math.ceil(orderZa.length / itemsPerPage)
        console.log( "order za: ",orderZa)
        return {
                ...state,
                allRecipes: orderZa,
                //totalPages: newTotalPagesOrderZA,
                //currentPage: 1
                
            }
        case ORDER_HEALTHSCORE_ASC:
          let orderAsc = [...state.allRecipes].sort((a,b) => {
            if(a.healthScore > b.healthScore) return 1;
            if(a.healthScore < b.healthScore) return -1
            return 0
          })  
         // const newTotalPagesOrderAsc = Math.ceil(orderAsc.length / itemsPerPage)
          console.log("orderAsc", orderAsc)
          return {
            ...state,
            allRecipes: orderAsc,
           // totalPages: newTotalPagesOrderAsc,
            //currentPage: 1
          }
        case ORDER_HEALTHSCORE_DES:
            let orderDes = [...state.allRecipes].sort((a,b) => {
                if(a.healthScore > b.healthScore) return -1;
                if(a.healthScore < b.healthScore) return 1
                return 0
            })
           // const newTotalPagesOrderDesc = Math.ceil(orderDes.length / itemsPerPage)
            console.log("healthscore desc:", orderDes)
            return {
                ...state,
                allRecipes: orderDes,
                //totalPages: newTotalPagesOrderDesc,
                //currentPage: 1
            }
        //case RECIPES_PAGING: 
          //   console.log("Recipes Paged - new recipes:", action.payload.recipes);
            //console.log("Total Pages:", action.payload.totalPages);
        //return {
          //  ...state,
            //allRecipes: action.payload.recipes,
            //totalPages: action.payload.totalPages
        //}
        //case GO_TO_PAGE: 
        //return {

            //...state,
          //  currentPage: action.payload
        //}
       // case FILTER_RECIPE_SUCCESS: 
       // return {
         //   ...state,
           // allRecipes: action.payload.recipesFiltered,
            //totalPages: action.payload.totalPages,
            //currentPage: 1
        //}
        //case ORDER_RECIPE_SUCCESS: 
        //return {
          //  ...state,
            //allRecipes: action.payload.recipeOrdered,
           // totalPages: action.payload.totalPages,
            //currentPage: 1
        //}

        default: return state
    }

}

export default reducer;