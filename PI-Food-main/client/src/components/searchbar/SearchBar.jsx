import style from "../searchbar/SearchBar.module.css"


function SearchBar({handleChange, handleSubmit}) {

  return (
      <div className={style.searchBox}>
        <input placeholder="Search recipes by name" onChange={handleChange}/>
        <button onClick={(e)=> {handleSubmit(e)}}>Search</button>
      </div> 
    );
  }
  
  export default SearchBar;
  