import { NavLink } from "react-router-dom";
import style from "../landingpage/LandingPage.module.css";
function LandingPage () {
    return (
      <div>
      <div className={style.landingdiv}>
        <h1 className={style.welcome}>Welcome to </h1>
        <h2 className={style.title}>Yummy</h2>
        <p className={style.p}>The foundation of genuine happines</p>
      </div>
      <div>
     <section>
        <h2>ABout us..</h2>
        <p>We offer you the most delicious and unique recipes never seen before. </p>
        <p>Additionally, you'll be able to create your own recipes and share them with our users!</p>
     </section>
     <section>
      <h2>More information</h2>
      <p>Do you have any question? Contact us</p>
      <span> Email: yummycompany@gmail.com</span>
      <span>Phone: 2355432376</span>
     </section>
      </div>
      <div>
        <button type="submit">
        <NavLink to= '/home'>Start</NavLink>
        </button>
      </div>
      <footer>
        <p>Individual Proyect Henry 2023</p>
      </footer>
      </div>
    );
  }
  
  export default LandingPage;