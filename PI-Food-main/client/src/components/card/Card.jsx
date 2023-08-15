
import style from "../card/Card.module.css";
import { NavLink } from "react-router-dom";

function Card ({recipe}) {
    
  const {title, image, diets,id} = recipe
  return (
      <div className={style.cardContainer}>
        <img alt="imagen" src={image}></img>
       <NavLink to={`/detail/${id}`}>
        <div>
        <h2>{title}</h2>
        </div>
       </NavLink>
       <br />
        <h3>{diets}</h3>
      </div>
    );
  }
  
  export default Card;