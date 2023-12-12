import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { Link } from 'react-router-dom'
import new_collections from '../Assets/new_collections'


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON NEW COLLECTIONS</p>
            <button><Link style={{textDecoration: 'none', color: 'white'}} to='/newcollection'>SHOP NOW</Link></button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers