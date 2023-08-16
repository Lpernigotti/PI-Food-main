
import style from "../card/Card.module.css";
import { NavLink } from "react-router-dom";

function Card ({recipe}) {
    
  const {title, image, diets,id} = recipe
  return (
      <div className={style.cardContainer}>
        <div>
        <h2 className={style.cardH2}>{title}</h2>
        </div>
       <NavLink to={`/detail/${id}`}>
        <img alt="imagen" src={image} className={style.cardImg}></img>
       </NavLink>
       <br />
        <h3 className={style.dieth3}>Diets</h3>
        { Array.isArray(diets) && 
          diets.map((diet,index) => (
            
            <div key={index} className={style.diet}>
                    {diet}
                  </div>
          ))}


      </div>
    );
  }
  
  export default Card;