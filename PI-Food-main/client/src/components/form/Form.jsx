import validate from "../validators";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { createRecipe, getDiets } from "../../redux/actions";
import style from "../form/Form.module.css";

function Form () {
   const dispatch = useDispatch();
   
   const diets = useSelector((state) => state.diets);
   useEffect(() => {
       if(diets.length === 0){
           dispatch(getDiets());
           console.log(diets)
       }
    }, [diets,dispatch]);
    //console.log(getDiets)
    const [input, setInput] = useState({
        title: "",
        summary: "",
        healthScore: "",
        steps: "",
        image: "",
        diets: [],
    })
    //console.log(diets)
    const [errors, setErrors] = useState({})
   
    function handleChange(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
    }
    

    function handleSubmit(event) {
        event.preventDefault()
        if(input.title && input.summary && input.healthScore && input.steps && input.diets){
            dispatch(createRecipe(input))
            alert("Tu receta fue creada!");
            
            setInput({
                title: "",
                summary: "",
                healthScore: "",
                steps:"",
                image: "",
                diets:[],
            });
            
        } else{
            alert("Falta informacion!")
        }
    }
    function handleChangeDiets(event){
        event.preventDefault();
        if(!input.diets.includes(event.target.value)){
            setInput({
                ...input,
                diets: [...input.diets, event.target.value]
            });
        }
    };
    //console.log(handleChangeDiets)
    // deshabilitar el voton si no completan todos los campos:
    const isValid = Object.values(errors).every((error) => !error)

    return (
     <div className={style.createFormContainer}>
        <form onSubmit={handleSubmit} className={style.createForm}>
            <div className={style.inputDiv}>
             <label className={style.inputLabel}>Title</label>
             <input 
             name="title" 
             value={input.title} 
             onChange={  handleChange} 
             className={style.inputField}/>
             {errors.title && <p>{errors.title} </p>}
            </div>

            <div className={style.inputDiv}>
             <label className={style.inputLabel}>Summary</label>
             <input
              name="summary" 
              value={input.summary} 
              onChange={ handleChange}
              className={style.inputField}/>
             { errors.summary &&<p>{errors.summary} </p>}
            </div>

            <div className={style.inputDiv}>
             <label className={style.inputLabel} >healthScore</label>
             <input 
             name="healthScore" 
             value={input.healthScore} 
             onChange={ handleChange}
             className={style.inputField}/>
             {errors.healthScore && <p>{errors.healthScore} </p>}
            </div>

            <div className={style.inputDiv}>
             <label className={style.inputLabel} >Steps</label>
             <input 
             name="steps" 
             value={input.steps}
              onChange={handleChange}
              className={style.inputField}/>
             { errors.steps && <p>{errors.steps}</p>}
            </div>

            <div className={style.inputDiv}>
             <label className={style.inputLabel} >Image</label>
             <input 
             name="image" 
             value={input.image} 
             onChange={handleChange} 
             className={style.inputField}/>
             { errors.image && <p>{errors.image}</p>}
            </div>

            <div className={style.inputDiv}>
             <label className={style.inputLabel}>Diets:</label>
             <select 
             onChange={ handleChangeDiets} 
             defaultValue="default" 
             className={`${style.inputField} ${style.selectField}`}>
                <option default></option>
                {diets?.map((d) => {
                    return (
                        <option key={d.name}  value={d.name}>{d.name}</option>
                    );
                })}
             </select>
             {errors.diets && <p>{errors.diets} </p>}
            </div>
            <br />
            <div>
                <button type="submit" disabled={!isValid} className={style.submitButton}>Create</button>
            </div>
        </form>
     </div>
    )
}
export default Form;