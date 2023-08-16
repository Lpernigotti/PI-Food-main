import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getRecipes, getByTitle, filterDiets, filterOrigin, orderAZ, orderZA, orderHealthScoreAsc, orderHealthScoreDesc} from "../../redux/actions";


import SearchBar from "../../components/searchbar/SearchBar";
import Cards from "../../components/cards/cards"
import style from "../home/Home.module.css";


function Home () {
    
const dispatch = useDispatch()
const allRecipes = useSelector((state) => state.allRecipes)  
const [searchString, setSearchString] = useState("")
const [currentPage, setCurrentPage] = useState(1);

const recipesPerPage = 9;

const indexOfLastRecipe = currentPage *  recipesPerPage;
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)


 function handleChange(event){
  event.preventDefault()
  setSearchString(event.target.value)
 }

 function handleSubmit(event){
  event.preventDefault()
  dispatch(getByTitle(searchString))
 }

useEffect(() => {
  dispatch(getRecipes())
 }, [dispatch]) 

 function handlerFilter (event) {
 console.log("Selected diets: ", event.target.value)
  dispatch(filterDiets(event.target.value))
  setCurrentPage(1)
 }

 function handleOrigin (event) {
  dispatch(filterOrigin(event.target.value))
  setCurrentPage(1)
 }

 function handleOrder (event){
  if(event.target.value === "orderAZ"){
    dispatch(orderAZ(event.target.value))
    setCurrentPage(1)
  } else if(event.target.value === "orderZA"){
    dispatch(orderZA(event.target.value))
    setCurrentPage(1)
  }
 }

 function handleOrderHealthScore(event){
  if(event.target.value === "Ascendente"){
    
    dispatch(orderHealthScoreAsc(event.target.value))
    setCurrentPage(1)
  } else if(event.target.value === "Descendente"){
    dispatch(orderHealthScoreDesc(event.target.value))
    setCurrentPage(1)
  }

 }
 function handlePages(newPage){
  setCurrentPage(newPage)
 }

return (
      <div className={style.home}>
        <h1 className={style.homeTitle}>Find your Recipe!</h1>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <div className={style.filtersContainer}>
          <div className={style.filters}>
            <select onChange={handlerFilter} >
            <option value="default">Filter By Diets</option>
            <option value="vegetarian" >vegetarian</option>
            <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
            <option value="vegan">vegan</option>
            <option value="whole 30">whole 30</option>
            <option value="dairy free">dairy free</option>
            <option value="gluten free">gluten free</option>
            <option value="paleolithic">paleolithic</option>
            <option value="primal">primal</option>
            <option value="ketogenic">ketogenic</option>
            <option value="pescatarian">pescatarian</option>
            <option value="fodmap friendly">fodmap friendly</option>
            <option value="AllRecipes">All Recipes</option>
            </select>
          
            <select name="Filter Recipes" onChange={handleOrigin}>
            <option value="default">Filter Recipes</option>
            <option value="all">All Recipes</option>
            <option value="created">Created</option>
            <option value="existing">Existing</option>
            </select>
          </div>

          <div className={style.sorting}>
            <select onChange={handleOrder}>
            <option value="default">Order...</option>
            <option value="orderAZ"> A-Z</option>
            <option value="orderZA"> Z-A</option>
            </select>

            <select onChange={handleOrderHealthScore}>
            <option value="default">Order by Healthscore</option>
            <option value="Ascendente">Asc</option>
            <option value="Descendente">Desc</option>
            </select>
          </div>
        </div>
        
        <Cards allRecipes={currentRecipes}/>
        <br />
        <div>
          <button onClick={() => handlePages(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          
          <span>{currentPage}</span>
          
          <button onClick={() => handlePages(currentPage + 1)} disabled={indexOfLastRecipe >= allRecipes.length}>Next</button>
        </div>
      </div>
    );
  }

  
  export default Home;