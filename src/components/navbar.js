import React from 'react'
// import Insta from './Svgs/insta'
// import Github from './Svgs/github'
// import Linkedin from './Svgs/linkedin'
// import {NavHashLink} from 'react-router-dom'
import { BrowserRouter/* ,Route,Routes */ } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './navbar.css';

function navbar() {
    return (
        <div className='cont'>
            <BrowserRouter>
            <nav className='navbar'>
                <img src="ibmlogo.png" alt="" className='navlogo' />
                <ul className='navul'>
                    
                    <li className='navli'> <NavHashLink smooth  exact to="#home" className="navroute"> Home </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#skills" className="navroute"> Explore </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#projects" className="navroute"> Marketplace </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#contact" className="navroute"> Steal Bucket </NavHashLink> </li>
                    <li className='navli'> <NavHashLink smooth  exact to="#contact" className="navroute"> My NFTs </NavHashLink> </li>
                    <li className='navli' id='dash'> <NavHashLink smooth  exact to="#about" className="navroute"> Dashboard </NavHashLink> </li>
                </ul>
            </nav>
                </BrowserRouter>
        </div>
    )
}

export default navbar
