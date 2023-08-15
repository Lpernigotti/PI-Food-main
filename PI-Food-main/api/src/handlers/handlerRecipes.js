const { getAllInfo } = require('../controllers/getAllInfo');
const { getApiById} = require('../controllers/getApiById');
const { getDBById} = require('../controllers/getDBById');
const {getInfoByTitle} = require('../controllers/getInfoByTitle');
const { infoByTitleDB } = require('../controllers/getInfoByTitleDB');
const { Recipe, Diets } = require('../db');
const {Op, where } = require('sequelize')


//function determineIDType(idRecipe) {
  // if (typeof idRecipe === "number") {
    //  return "api"; // Es un número, por lo tanto, es un ID de la API
    //} else {
      // (typeof idRecipe === "string") 
      //return "database"; // Es una cadena, por lo tanto, es un ID de la base de datos (UU
  //}
//}
  
const validateUuid = (id) => {
    const UuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;
    return UuidRegex.test(id);
  }


const handlerAllInfo = async(req,res) => {
    const { title } = req.query;
    let allInfo = await getAllInfo();

    if(title){
        try {
         let recipeFiltered = await allInfo.filter((rec) => rec.title.toLowerCase().includes(title.toLowerCase())
         ); // para filtrar sin importar mayusc o minusc

         recipeFiltered.length
         ? res.status(200).json(recipeFiltered)
         : res.status(404).send("No se encontro esa receta")

        } catch (error) {
            res.status(500).send("Algo salio mal en el handler de AllInfo ")
        }
    }else{
        res.status(200).send(allInfo) // si no buscan por titulo se devuelve todo 
    };
}

const handlerRecipeById = async (req,res) => {
    const { idRecipe } = req.params;
   //const idType = determineIDType(idRecipe);
    try {

        if( !validateUuid(idRecipe)){

            let recipeApi = await getApiById(idRecipe);
            console.log("Holis")
            let recipeInfo = {
                image: recipeApi.image,
                title: recipeApi.title,
                diets: recipeApi.diets,
                summary: recipeApi.summary,
                healthScore: recipeApi.healthScore,
                steps: recipeApi.analyzedInstructions[0]?.steps.map((element) => {
                    return {
                        number: element.number,
                        step: element.step, 
                        
                    };
                }),
            };
            console.log(recipeInfo)
            res.status(200).json(recipeInfo);
        } else {
           let recipeDb = await getDBById(idRecipe);
           console.log("recetas de la db")
           return res.json(recipeDb)
        }   

    } catch (error) {
        res.status(500).send( "Algo salio mal en el handlerRecipeByid");
    };
}

const handlerRecipeByTitle = async (req,res) => {
    const { title } = req.query;
    //let allInfo = await getAllInfo();
    
   // if(!title){
     //  res.send(allInfo)
    //}

    try {
        const apiResults = await getInfoByTitle(title);
        const dbResults = await infoByTitleDB(title);

        const searchResults = [...apiResults, ...dbResults];
        console.log(searchResults)
        if(searchResults.length > 0){
            res.status(200).json(searchResults);
        } else{
            res.status(404).send("No se encontraron recetas con ese titulo");
        }
    } catch (error) {
        res.status(500).send("Ocurrio algo al buscar recetas por título: ", error.message);
    }


    

}
const handlerPostRecipe = async(req,res) => {
    const { title, summary, image, steps, healthScore, diets} = req.body;
    try {
        if(!title || !summary || !image || !steps || !healthScore || !diets ) return res.status(400).json({ message: "Faltan datos..."})
 
        const newRecipe = await Recipe.create({
            title,
            summary,
            healthScore,
            steps,
            image
        });
        let getDiet = await Diets.findAll({
            where:{
                name: diets || ""
            }
        });
        let recipeWithDiets = await newRecipe.addDiet(getDiet)

        //console.log(recipeWithDiets)

        res.status(200).send(recipeWithDiets)
        
    } catch (error) {
       console.log(error)
        res.status(500).send(error.message)
    }
}


module.exports= {
    handlerAllInfo,
    handlerRecipeByTitle,
    handlerRecipeById,
    handlerPostRecipe
}