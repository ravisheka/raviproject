import "./Education.css";
import React from 'react'
import { FaLaptopCode} from "react-icons/fa"
const Education = () => {
  return (
   
        <div className="detail-section pg-skill">
            <div className="detail-title">
                <div className="title-icon">
                <FaLaptopCode size={30} style={{color:"blue",marginRight:"1rem"}}/>           
                </div>
                <span><h2>Programming Skills</h2></span>
            </div>
           <div className="detail-content">
            <ul className="pg-list">
                <li>
                    <span>HTML5</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"90%"}}></div>
                    </div>
                </li>
                <li>
                    <span>CSS3</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"90%"}}></div>
                    </div>
                </li>
                <li>
                    <span>BOOTSTRAP</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"90%"}}></div>
                    </div>
                </li>
                <li>
                    <span>JAVASCRIPT</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"90%"}}></div>
                    </div>
                </li>
                <li>
                    <span>HTML5</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"90%"}}></div>
                    </div>
                </li>
                <li>
                    <span>GITHUB</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"90%"}}></div>
                    </div>
                </li>
                <li>
                    <span>REACT JS</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"90%"}}></div>
                    </div>
                </li>
                <li>
                    <span>MONGODB</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"80%"}}></div>
                    </div>
                </li>
                <li>
                    <span>NODE JS</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"78%"}}></div>
                    </div>
                    </li>
                    <li>
                    <span>EXPRESS JS</span>
                    <div className="sb-skeleton">
                        <div className="skillbar" style={{pgbarLength:"70%"}}></div>
                    </div>
                </li>
               
            </ul>
           </div>
        </div>
    
    
  )
}

export default Education
