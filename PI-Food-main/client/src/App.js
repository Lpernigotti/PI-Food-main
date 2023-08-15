import {Routes, Route, useLocation} from "react-router-dom"
//import { useState } from "react";
//import axios from "axios";
import style from'./App.module.css';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Create from './views/create/Create';
import LandingPage from "./views/landingpage/LandingPage";
import NavBar from "./views/navbar/NavBar";

function App() {
 
 const location = useLocation();
 
  return (
  
    <div className={style.App}>
      {
        location.pathname !== '/' && <NavBar/>
      }
      <Routes>
        <Route path= "/home" element={<Home/>}/>
        <Route path= "/detail/:id" element={<Detail/>}/>
        <Route path= "/create" element={<Create/>}/>
        <Route path= "/" element={<LandingPage/>}/>
      </Routes>
    </div>
 
  );
}

export default App;
