import "./pricing.css";
import React from 'react'
import { Link } from "react-router-dom";

function pricingCard() {
  return (
    <div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">SKILLS</p>
            <p>- HTML5 -</p>
            <p>- CSS3 -</p>
            <p>-JAVACRIPT-</p>
            <p>-Responsive Design-</p>
            <Link to="/contact" className="btn">Portfolio</Link>
        </div>
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">SKILLS</p>
            <p>- HTML5 -</p>
            <p>- CSS3 -</p>
            <p>-REACT JS-</p>
            <p>-Responsive Design-</p>
            <Link to="/contact" className="btn">WEATHER</Link>
        </div>
        <div className="card">
            <h3>- Using -</h3>
            <span className="bar"></span>
            <p className="btc">-skill-</p>
            <p>- HTML5 -</p>
            <p>- CSS3 -</p>
            <p>-JAVASCRIPT-</p>
            <p>-Responsive Design-</p>
            <Link to="/contact" className="btn">CREATIVE </Link>
        </div>
    </div>
      
    </div>
  )
}

export default pricingCard
