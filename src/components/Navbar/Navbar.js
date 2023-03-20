import React from 'react'
import navbar from './Navbar.module.css'
import {Link} from 'react-router-dom'
// import project from '../Projects/Projects.module.css'

export default function Navbar() {
  return (
    <div className={navbar.navbarDiv} >
      <div className={navbar.logodiv} >
        <img className={navbar.itsmeimg} src="./images/sinthii.jpg" alt="sinthiya logo "/>
      </div>
        <div></div>
        <div className={navbar.navDiv} ><Link to={"/Home"}><p className={navbar.link} >HOME</p> </Link></div>
        <div className={navbar.navDiv}  ><Link to={"/About"}><p className={navbar.link} >ABOUT</p> </Link></div> 
        <div className={navbar.navDiv}  ><Link to={"/Projects"}><p className={navbar.link} >PROJECTS</p> </Link></div>
        <div className={navbar.navDiv}  ><Link to={"/Skills"}><p className={navbar.link} >SKILLS</p> </Link></div>
        <div className={navbar.navDiv}  ><Link to={"/Contact"}><p className={navbar.link} >CONTACT</p> </Link></div> 
        {/* <div className={`${navbar.navDiv} ${project.projectNav}`} >Home</div>
        <div className={navbar.navDiv}>Projects</div>
        <div className={navbar.navDiv}>Skills</div>
        <div className={navbar.navDiv}>Contact</div> */}

    </div>
  )
}
