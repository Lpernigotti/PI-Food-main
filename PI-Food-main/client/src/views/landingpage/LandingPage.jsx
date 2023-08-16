import { NavLink } from "react-router-dom";
import style from "../landingpage/LandingPage.module.css";
function LandingPage () {
    return (
      <div className={style.landingdiv}>
        <div>
          <h1 className={style.welcome}>Welcome to </h1>
          <h2 className={style.title}>Yummy</h2>
          <img src='http://st.depositphotos.com/1732591/2713/v/950/depositphotos_27132303-stock-illustration-chef-hat.jpg' alt="Chef" className={style.image}/>
          <br />
           <p className={style.p}>The foundation of genuine happines</p>
           <br />
        </div>
        <div className={style.aboutContent}>
        <div className={style.circleSectionLeft}>
          <section >
            <h2 className={style.titleSection}>ABout us..</h2>
            <p  className={style.p2}>We offer you the most delicious and unique recipes never seen before. </p>
            <p className={style.p2}>Additionally, you'll be able to create your own recipes and share them with our users!</p>
          </section>
        </div>
        <div className={style.circleSectionRight}>
          <section>
            <h2 className={style.titleSection}> More information</h2>
            <p className={style.p2}>Do you have any question? Contact us</p>
            <span className={style.p2}> Email: yummycompany@gmail.com</span>
            <br />
            <span className={style.p2}>Phone: 2355432376</span>
         </section>
        </div>
        </div>
        <div className={style.divButton}>
          <button type="submit" className={style.Button}>
            <NavLink to= '/home' className={style.navLink}>Start</NavLink>
          </button>
            <br />
            <br />
            <br />
            <br />
            <span className={style.footer}>Individual Proyect Henry 2023</span>
        </div>
      </div>
    );
  }
  
  export default LandingPage;