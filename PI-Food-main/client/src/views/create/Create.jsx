import Form from "../../components/form/Form";
import style from "../create/Create.module.css";
function Create() {
    return (
      <div className={style.createContainer}>
        <h2 className={style.createFormTitle}>Ready to Create?</h2>
        <h4 className={style.createH4}>This is a place where you will be able to create your favorites recipes. Complete the form below</h4>
        <br />
        <br />
        <Form/>
      </div>

    );
  }
  
  export default Create;