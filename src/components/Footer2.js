import "./footer2.css"
import React from 'react'
import { FaHome, FaMailBulk, FaPhone,FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"


const Footer2 = () => {
  return (
    <div>
      <div class="contact-me">
            <p>Let Me Get you a beautiful website</p>
            <a class="button-two" href="./ContactMe">Hire Me</a>
        </div>
        <footer>
            <p>Ravi Shekhar Singh</p>
            <p>I am learning from webologix,career dose,Skills(Html,css,javascript,react js,git,github,mongodb,nodejs)</p>
            <div class="social">
            <a href="https://www.facebook.com/profile.php?id=100077170480908"> <FaFacebook size={20} style={{color:"blue",marginRight:"2rem"}}/></a>
              <a href="" ><FaInstagram size={20} style={{color:"brown",marginRight:"2rem"}}/></a>
              <a href="https://www.linkedin.com/in/ravishekhar-singh-b64640191"> <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}}/></a>
              <a href=""> <FaGithub size={20} style={{color:"white",marginRight:"2rem"}}/></a>
              <a href="tel:8368822522" ><FaPhone size={20} style={{color:"yellowgreen",marginRight:"1rem"}}/>8756230827</a>
              <h4><a href="https://mail.google.com/mail/u/0/#inbox?compose=new"> <FaMailBulk size={20} style={{color:"yellow",marginRight:"1rem"}}/>ravi32@gmail.com</a></h4>
            </div>
            
           
           
        </footer>
    </div>
  )
}

export default Footer2
