import "./Navbar.css";

 import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {FaBars,FaSun,FaTimes} from "react-icons/fa";
const Navbar = () => {
  const [click ,setClick] =useState(false);
  const handleClick =()=> setClick(!click);
  const [color,setColor] = useState(false)
  const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false)
    }
  };
  window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to ="/">
        <h3>Ravi Shekhar<span>Singh</span></h3>
      </Link>
      <ul className={click ? "nav-menu.active" : 
      "nav-menu"}>
      <li>
      <Link to="/" onClick={changeColor} ><FaSun size={20} style={{color:"yellow"}}/></Link>
      </li>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/About">About</Link>
      </li>
      <li>
      <Link to="/Project">Project</Link>
      </li>
      <li>
      <Link to="/ContactMe">ContactMe</Link>
      </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
      {click ?(
        <FaTimes size={20} style={{color:"#fff"}}/>
      ):(
        <FaBars size={20} style={{color:"#fff"}}/>
      )}
      </div>
    </div>
  );
};

export default Navbar;
