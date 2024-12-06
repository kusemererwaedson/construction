import React,{useRef} from 'react'
import "./Header.css" 
import {hero_image} from '../../assets'
import { Link } from 'react-scroll'
import Archievement from '../Archievement'
import { gsap } from "gsap";
import {useGSAP} from '@gsap/react'

const Header= () => {
  const container = useRef(null);
  useGSAP(()=>{
    const timeline = gsap.timeline({delay:1,stagger:1});
    timeline
    .fromTo(
      ".image__container",
      {scale:.5,opacity:0,y:150},
      {scale:1,ease:'sine.in',opacity:1,y:0}
    )
    .from(
      ".description",
      {opacity:0,y:-30}
    )
    .from(
      ".title",
      {opacity:0,y:-30}
    )
    .from(
      ".buttons__container",
      {opacity:0,y:40}
    )
  },{scope:container})
  return (
    <header id="header" ref={container}>
      <div className="container full__height">
        <div className="row">
          <div className="column">
            <h1 className="title">
              Building Dreams, {"  "}
              <span className='g-text'>Creating Reality</span>
            </h1>
            <p className="text__muted description">
            We are dedicated to turning your visions into tangible masterpieces. 
            With years of experience and a team of skilled professionals, we 
            specialize in delivering high-quality construction services tailored 
            to meet the unique needs of each client.
            </p>
            <div className="buttons__container">
              <Link to="services" smooth={true} className="btn">Our Services</Link>
              <Link to="contact" smooth={true} className="btn btn__primary">Contact Us</Link>
            </div>
          </div>
          <div className="column">
            <div className="image__container">
              <img src={hero_image} alt="" />
            </div>
          </div>
        </div>
        <Archievement/>
      </div>
    </header>
  )
}

export default Header