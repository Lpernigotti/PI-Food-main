const { Router} = require('express');
const { handlerAllInfo, handlerRecipeByTitle, handlerRecipeById, handlerPostRecipe} = require('../handlers/handlerRecipes')

const recipesRouter = Router();

recipesRouter.get('/', handlerAllInfo)
recipesRouter.get('/:idRecipe', handlerRecipeById);
recipesRouter.get('/title', handlerRecipeByTitle);
recipesRouter.post('/', handlerPostRecipe);





module.exports = recipesRouter;
