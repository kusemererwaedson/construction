import React from 'react'
import { PiBuildingsFill } from 'react-icons/pi'
import "./Logo.css"

const Logo = () => {
  return (
    <div className='logo'>
        <div className="icon__container">
            <PiBuildingsFill/>
        </div>
        <h1 className='name'>Son<span>tech</span></h1>
    </div>
  )
}

export default Logo