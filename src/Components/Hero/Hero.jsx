import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png' 
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <div className='hero-quality'>GET THE QUALITY YOU DESERVE!</div>
            <div className='hero-welcome'>
                <p>WELCOME TO </p>
                <p>ACID HOUSE </p>
            </div>
            <div className="hero-latest-btn">
                <Link style={{textDecoration: 'none', color: 'white'}} to='/newcollection'>SHOP NOW</Link>
                
            </div>
        </div>
        <div className="hero-right">
            
        </div>

    </div>
  )
}

export default Hero