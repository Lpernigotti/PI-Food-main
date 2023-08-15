import { useParams } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetail } from "../../redux/actions";

function Detail () {
    const {id} = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.recipeDetail);
   console.log(recipe)
  useEffect(() => {
    dispatch(recipeDetail(id))
  }, [dispatch, id])
console.log(recipe.diets)
  return (
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt=" img Not found" />
        {recipe.healthScore? (
          <div>
            <h3>Health Score: </h3>
            <h4>{recipe?.healthScore}</h4>

          </div>
        ): (
          <h4>HealthScore is not available</h4>
        )}
        <h3>Diets: </h3>
        {recipe.diets? (
          
          <ul>
            {recipe?.diets.map((d, index) => (
              <li key={index}>{d}</li>
            ))}            
          </ul>
        ):(
          <h4> Not diets available</h4>
        )}
        {recipe.summary? (
          <div>
            <h3>Summary: </h3>
            <p>{ recipe?.summary.replace( /(<([^>]+)>)/ig, '')}</p>
          </div>

        ): (
          <h4>Summary is not available</h4>
        )}
          {Array.isArray(recipe.steps)? (
            <div>
              {recipe.steps?.map((s) => {
                return (
                  <div>
                    <p>Step {s.number}: </p>
                    <h4>{s.step}</h4>
                  </div>
                )
              })}
            </div>
          ) : (
           <div>
             <h4>Steps: </h4>
             <p>{recipe?.steps}</p>
           </div>
          )
        }

        

      </div>
    );
  }
  
  export default Detail;