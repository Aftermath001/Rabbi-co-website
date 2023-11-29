import React from 'react'
import { Link } from 'react-scroll'
import '../App.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
const Home = () => {
  return (
    
    <section id ="heroSection" className='hero-section'>
        <div className='hero-section-content-box'>
            <div className='hero-section-content'>
                <p className='section-title'>Hello,</p>
                <h1 className='hero-section-title'>
                    <span className='hero-section-title-color'>Rabbi.CO</span>{" "} <br />
                    FARMERS
                </h1>
                <p className='hero-section-description'>
                    
                As dedicated farmers immersed in cuniculture, we are meticulous,passionate and committed to the art 
                and science of raising domestic rabbits. 
                Our expertise extends to various aspects of rabbit husbandry, 
                from selective breeding to the careful management of the rabbits' living conditions. 
                Our small scale farm is a model of sustainable and ethical practices, reflecting our deep understanding of the dietary, 
                health, and environmental needs of your rabbit population
                    <br />
                    Our commitment to cuniculture not only makes us skilled agriculturalists but also stewards of responsible and compassionate 
                    farming practices in the realm of rabbit cultivation
                </p>
            </div>
            <Link
             smooth={true}
             offset={-70}
             duration={500}
             to="contact"

            >
            <button className='btn btn-success'>Get In Touch</button>
            </Link>
        </div>
        <div className='hero-secttion-image'>
            <img src='./images/rabbit-homepage.jpg' alt='Hero Section'/>
        </div>
    </section>
  )
}

export default Home