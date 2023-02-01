import "./work.css"
import React from 'react'

const workcard = () => {
  return (
    <div>
      <div class="card-group">
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvtaNnIvuBNHJjWsV3HIgja2DzTQEIqimcw&usqp=CAU" class="card-img-top" alt="ravi"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="ravi"/>
    <div class="card-body">
      <h5 class="card-title">REACT JS WEATHER APP</h5>
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
  )
}

export default workcard
