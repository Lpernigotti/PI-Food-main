
const validate =(input) => {
    const errors = {};
    if(input.title.length > 50){
        errors.title = "El título no puede superar los 50 caracteres"
    }
    if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(input.summary)){
        errors.summary = "El resumen solo admite cadenas de texto"
    }
   if(/^(?:100|[1-9][0-9]?)$/.test(input.healthScore) ){
        errors.healthScore = "El valor energético solo admite numeros"
    }
    if(input.steps.length === 0 || input.diets.length === 0 || input.image.length === 0){
        errors.steps = "Este campo es obligatorio"
    }
    
    return errors;
    
}
export default validate;
