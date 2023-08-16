import { useParams } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetail } from "../../redux/actions";
import style from "../detail/Detail.module.css"

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
      <div className={style.detailContainer}>
        <div className={style.titImgSumSection}>
        <div className={style.titleSection}>
        <h2 className={style.title}>{recipe.title}</h2>
        </div>
        
            {recipe.summary? (
              <div className={style.contentSection}>
                 <div className={style.summarySection}>
                  <h3 className={style.summaryTitle}>Summary: </h3>
                  <p className={style.summaryText}>{ recipe?.summary.replace( /(<([^>]+)>)/ig, '')}</p>
                </div>
              </div>
    
              ): (
              <div>
                <h4>Summary is not available</h4>
              </div>
            )}
            </div>
            <div className={style.imageSection}>
              <img src={recipe.image} alt=" img Not found" className={style.recipeImage}/>
            </div>

        {recipe.healthScore? (
          
          <div className={style.infoSection}>
            <div className={style.healthScore}>
              <div className={style.healthScoreHover}>
                <h3 className={style.healthScoreTitle}>Health Score: </h3>
                <h4 className={style.healthScoreValue}>{recipe?.healthScore}</h4>
              </div>
            </div>

          </div>
        ): (
          <div className={style.infoSection}>
            <div className={style.healthScore}>
              <div className={style.healthScoreHover}>
                <h3 className={style.healthScoreTitle}>Health Score: </h3>
                <h4>HealthScore is not available</h4>
              </div>
            </div>
          </div>
        )}
        <div className={style.diets}>
         <h3 className={style.dietsTitle}>Diets: </h3>
            <ul className={style.dietList}>
            {recipe?.diets?.map((d) => (
              <li key={d.id} className={style.dietItem}>{d.name || d}</li>
            ))}            
          </ul>
          
        </div>
            <div className={style.stepsSection}>
              <h4 className={style.stepsTitle}>Steps: </h4>
          {Array.isArray(recipe.steps)? (
              <ol className={style.stepsList}>

                {recipe.steps?.map((s) => {
                  return (
                    <li key={s.number} className={style.stepsItem}>
                      Step {s.number} : {s.step}
                    </li>
                  )
                })}
              </ol>
          ) : (
            <div>
             <h4>Steps: </h4>
             <p>{recipe?.steps}</p>
           </div>
          )
        }
        </div>

        

      </div>
    );
  }
  
  export default Detail;