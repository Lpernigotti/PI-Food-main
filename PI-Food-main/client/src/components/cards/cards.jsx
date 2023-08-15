import Card from "../card/Card";
import style from "../cards/cards.module.css";
function Cards ({allRecipes}) {
    const recipesList = allRecipes
  return (
      <div className={style.cardsContainer}>
        {recipesList?.map(recipe => (
          <Card recipe={recipe} key={recipe.id}/>
          ))}
      </div>
    );
  }
  
  export default Cards;
  