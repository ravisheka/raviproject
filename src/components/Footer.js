import "./Footer.css"
import React from 'react'
import { FaHome, FaMailBulk, FaPhone,FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"


function Footer() {
  return (
    <div className="footer">
   <div className="footer-container">
    <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"red",marginRight:"1rem"}}/>
            <div>
                <p>Meja,Prayagraj</p>
                <p>Uttar Pradesh(212302)</p>
            </div>
            <div className="phone">
               <h4><a href="tel:8368822522" ><FaPhone size={20} style={{color:"yellowgreen",marginRight:"1rem"}}/>8756230827</a></h4>
            </div>
            <div className="email">
               <h4><a href="https://mail.google.com/mail/u/0/#inbox?compose=new"> <FaMailBulk size={20} style={{color:"yellow",marginRight:"1rem"}}/>ravi32@gmail.com</a></h4>
            </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>I am Ravi Shekhar Singh.Web Developer.I enjoy discussing
               new project and design challenges </p>
               <div className="social">
              <a href="https://www.facebook.com/profile.php?id=100077170480908"> <FaFacebook size={20} style={{color:"blue",marginRight:"2rem"}}/></a>
              <a href="" ><FaInstagram size={20} style={{color:"brown",marginRight:"2rem"}}/></a>
              <a href="https://www.linkedin.com/in/ravishekhar-singh-b64640191"> <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}}/></a>
              <a href=""> <FaGithub size={20} style={{color:"white",marginRight:"2rem"}}/></a>
               </div>
        </div>
    </div>
   </div>

    </div>
  )
}

export default Footer