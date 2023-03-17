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
         <div className={navbar.navDiv} ><Link to={"/Home"}> HOME</Link></div>
        <div className={navbar.navDiv}  ><Link to={"/About"}>ABOUT</Link></div> 
        <div className={navbar.navDiv}  ><Link to={"/Projects"}>PROJECTS</Link></div>
        <div className={navbar.navDiv}  ><Link to={"/Skills"}>SKILLS</Link></div>
        {/* <div className={navbar.navDiv}  ><Link to={"/Contact"}>CONTACT</Link></div>  */}
        {/* <div className={`${navbar.navDiv} ${project.projectNav}`} >Home</div>
        <div className={navbar.navDiv}>Projects</div>
        <div className={navbar.navDiv}>Skills</div>
        <div className={navbar.navDiv}>Contact</div> */}

    </div>
  )
}
