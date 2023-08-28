
const validate =(input) => {
    const errors = {};
    if(!/^(?!.*\d)[A-Za-z\s]{3,35}$/.test(input.title)){
        errors.title = "El título debe contener entre 3 y 35 caracteres"
    }
    if(!/^[A-Za-z0-9.,; ]{1,}$|^.{1,350}$/.test(input.summary)){
        errors.summary = "El resumen admite hasta 350 caracteres"
    }
   if(!/^(?:100|[1-9][0-9]?)$/.test(input.healthScore) ){
       errors.healthScore = "El valor energético solo admite numeros del 1 al 100"
    }
    if(!/^.+\.png$/.test(input.image)){
        errors.image = "Campo invalido"
    }
    if(input.steps.length === 0 ){
        errors.steps = "Este campo es obligatorio"
    }
   
    
    return errors;
    
}
export default validate;
