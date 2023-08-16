
import { NavLink } from "react-router-dom";
import style from "../navbar/NavBar.module.css";
function NavBar () {
    return (
        <nav className={style.navBar}>
            <h2 className={style.navTitle}>Yummy</h2>
            <div>
                <h3 className={style.slogan}>You don't need to eat less, you need to eat well</h3>
            </div>
        
            
            <div className={style.divNL}>
            <button className={style.navButton}>
                <NavLink to={'/home'} className={style.navLink}>Home</NavLink>
            </button>
            <button className={style.navButton}>
                <NavLink to={'/create'} className={style.navLink}>Create</NavLink>
            </button>
            <button className={style.navButton}>
                <NavLink to={'/'} className={style.navLink}>LandingPage</NavLink>
            </button>
            </div>
        </nav>
    )
}
export default NavBar;