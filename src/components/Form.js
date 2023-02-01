import "./Form.css";
import React from 'react'

const Form = () => {
  return (
    
    <div className="form">
      <form action="https://formspree.io/f/mjvdgeav" method="POST">
      <h1>CONTACT US</h1>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" autoComplete="off" required></input>
        <label>Email</label>
        <input type="email" placeholder="Email" autoComplete="off" required></input>
        <label>Messages</label>
        <textarea name="message" cols="30" rows="6" autoComplete="off" required/>
        <button className="btn" type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
