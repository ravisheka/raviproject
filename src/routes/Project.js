import React from 'react'
import Navbar from '../components/Navbar'
//import Footer2 from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import WorkCard from '../components/WorkCard'
import Footer2 from '../components/Footer2'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <WorkCard/>
      <Footer2/>
     
    </div>
  )
}

export default Project
