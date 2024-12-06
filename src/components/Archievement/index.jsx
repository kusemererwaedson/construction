import React, { useState,useEffect, useRef } from 'react'
import "./Archievement.css"
import Odometer from 'react-odometerjs'
import { FaAward, FaDiagramProject, FaUsersLine } from 'react-icons/fa6'
import { GiTeamIdea } from 'react-icons/gi'
import { gsap } from "gsap";
import {useGSAP} from '@gsap/react'

const Archievement = () => {
    const [clients, setClients] = useState(0)
    const [projects,setProjects] = useState(0);
    const [teams,setTeams] = useState(0);
    const [awards,setAwards] = useState(0);
    const container = useRef(null);
    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClients(120);
            setProjects(150);
            setTeams(44);
            setAwards(89);
        },3000);
        return () => clearTimeout(timeOutId);
    },[])
    useGSAP(()=>{
        const timeline = gsap.timeline();
        timeline
        .from(
            ".archievement",
            {
                delay:1.5,
                x:100,
                stagger:.5,
                opacity:0,
            }
        )
    },{scope:container})
    return (
        <div className='archievement__container' ref={container}>
            {/* Start Achievement */}
            <div className='archievement'>
                <div className="icon__container">
                    <FaUsersLine />
                </div>
                <div className="details">
                    <div className="count__row">
                        <Odometer value={clients} className='title' />
                        <h1 className="g-text title">K</h1>
                    </div>
                    <small className="text__muted">Happy Customers</small>
                </div>
            </div>
            {/*Achievement End*/}

            {/* Start Achievement */}
            <div className='archievement'>
                <div className="icon__container">
                    <FaDiagramProject />
                </div>
                <div className="details">
                    <div className="count__row">
                        <Odometer value={projects} className='title' />
                        <h1 className="g-text title">+</h1>
                    </div>
                    <small className="text__muted">Completed Projects</small>
                </div>
            </div>
            {/*Achievement End*/}

            {/* Start Achievement */}
            <div className='archievement'>
                <div className="icon__container">
                    <GiTeamIdea />
                </div>
                <div className="details">
                    <div className="count__row">
                        <Odometer value={teams} className='title' />
                        <h1 className="g-text title">+</h1>
                    </div>
                    <small className="text__muted">Expert Workers</small>
                </div>
            </div>
            {/*Achievement End*/}

            {/* Start Achievement */}
            <div className='archievement'>
                <div className="icon__container">
                    <FaAward />
                </div>
                <div className="details">
                    <div className="count__row">
                        <Odometer value={awards} className='title' />
                        <h1 className="g-text title">+</h1>
                    </div>
                    <small className="text__muted">Awards Winning</small>
                </div>
            </div>
            {/*Achievement End*/}
        </div>
    )
}

export default Archievement