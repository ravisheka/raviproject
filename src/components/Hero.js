import "./hero34.css";
import React from 'react'
import IntroImg from "../assets/friend.jpg"
const Hero = () => {
  return (
    <div>
      <section className="about">
        <div className="main">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
            
            <div className="about-text">
                <h2>About Me</h2>
                <h5>Web<span> Developer</span> </h5>
                <p>Hi everyone, I am a web front-end developer, graduated from GZSCCET,Bthinda(Punjab). I recently try my
        best to improve my skills on web front-end. My favorite thing is to observe others' portfolio.I can provide clean code and pixel.
                   I also make the website more interactive with web animations.I can provide clean code .
                   I also make the website more interactive with web animations.A responsive design make your
                   website accessible to all users,regardless of their device.
                </p>
                <button type="button">Let's Talk</button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero
