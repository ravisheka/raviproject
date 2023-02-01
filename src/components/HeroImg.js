import "./Hero.css";
import React from 'react'
import Typical from 'react-typical';
//import IntroImg from "../assets/ravis.jpg"
const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src="https://wallpaperaccess.com/full/2948617.jpg" alt="IntroImg"/>
    </div>
      <div className="content">
      <div className='profile-picture'>
         <div className='profile-picture-background'></div>
         </div>
        <p>Hi, I AM Ravi Shekhar Singh</p>
        <h1>
         {" "}
         <Typical 
         loop={Infinity}
         steps={[
           
                "Full STACK DEVELOPER",
                1000,
                "REACT JS",
                1000,
                "NODE JS",
                1000,
                "REDUX",
                1000,
                ]}
                />
         </h1>
        <div>
            
            <a href="/project" className="btn">Projects</a>
            <a href='ravi.pdf.pdf' download="ravi.pdf.pdf">
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
