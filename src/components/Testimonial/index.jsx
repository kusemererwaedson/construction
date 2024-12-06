import React,{useRef} from 'react'
import "./Testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {testimonial} from '../../data'
import { FaStar } from 'react-icons/fa';
import { gsap } from "gsap";
import {useGSAP} from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Testimonial = () => {
  const container = useRef(null);
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      }
    })
    timeline
    .from(
      ".title",
      {y:-50,opacity:0}
    )
    .from(
      ".sub__title",
      {y:-50,opacity:0}
    )
    .fromTo(
      ".slick-slide",
      {x:100,opacity:0},
      {opacity:1,stagger:.5,x:0}
    )

  },{scope:container})
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode:true,
    pauseOnHover:true,
    autoplay:true,
    autoplaySpeed:3000,
    responsive:[
      {
        breakpoint:600,
        settings:{
          slidesToShow:1,
          centerPadding:0,

        }
      }
    ]
  };
  return (
    <section id="testimonial" ref={container}>
      <div className="container">
        <h1 className="title">
            Clients <span className="g-text">Testimonials</span>
        </h1>
        <h3 className="sub__title">What our clients are saying</h3>
        <Slider {...settings} className="testimonial__container">
          {
            testimonial.map((list,index) =>(
              <React.Fragment key={index}>
                <div className="user__row">
                  <div className="profile">
                    <img src={list.image} alt={list.name} />
                  </div>
                  <div className="details">
                    <h3 className="name">{list.name}</h3>
                    <small className="text__muted">CEO of Sontech</small>
                  </div>
                </div>
                <p className="text__muted content">{list.review}</p>
                <div className="stars__container">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial