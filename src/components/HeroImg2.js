import "./HeroImg2.css";
//import "./hero23.css";
import React,{Component} from 'react'
class HeroImg2 extends Component {
//function HeroImg2() {
  render (){
  return (
    <div className="hero-img">
    <div className="heading">
    <h1>{this.props.heading}</h1>
    <p>{this.props.text}</p>
    <div class="card-group">
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkVSLfOagQ1X70jcvT_Gbrxbu4g6vN9Ebfg&usqp=CAU" class="card-img-top" alt="ravi"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIgNtCoWjvs4tCX7u1qwBIfnYjPfX7KDy5A&usqp=CAU" class="card-img-top" alt="ravi"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="ravi"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div> 
    </div>
    </div>
  )
}
}
export default HeroImg2