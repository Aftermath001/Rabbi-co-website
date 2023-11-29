import React from 'react'
// import { NavLink } from 'react-router-dom';
import '../App.css'
const About = () => {
  return (
    <section id='AboutMe' className='about-section'>
    <div className='about-section-img'>
        <img src='/images/rabbit2.jpg' alt='About Me'/>
    </div>
    <div className='hero-section-content-section-box-about-section-box'>
        <div className='hero-section-content'>
            {/* <p className='section-title'>Here's more about us</p> */}
            <h1 className='hero-section-content-box'>About Us</h1>
            <p className='hero-section-description'>
                
            Cuniculture refers to the practice of rabbit farming or rabbit husbandry, encompassing the breeding, rearing, and management of domestic rabbits for various purposes. 
            This agricultural pursuit involves the careful cultivation of rabbits for meat, fur, wool, laboratory use, or as companion animals.
            Cuniculture requires attention to the rabbits' dietary needs, living conditions, and health, making it both a science and an art. 
            </p>
            <p className='hero-section-description'>
            As a sustainable and efficient form of livestock farming, 
            cuniculture plays a vital role in providing a source of protein and other resources while promoting responsible animal husbandry practices. 
                 
            </p>
            {/* <a href={CV} download> */}
            <button className='btn btn-success'>Buy Here</button>
            {/* </a> */}
        </div>
    </div>
   </section>
  )
}

export default About