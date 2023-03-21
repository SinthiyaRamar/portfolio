import React from 'react'
import navbar from './Navbar.module.css'

import { HashLink } from 'react-router-hash-link'


export default function Navbar() {
  return (

    <div className={navbar.navbarDiv} >
      <div className={navbar.logodiv} >
        <img className={navbar.itsmeimg} src="./images/s.jpg" alt="sinthiya logo " />
      </div>
      <div></div>
         <div className={navbar.navDiv} > <HashLink to={"/#Home"} smooth><p className={navbar.link} >HOME</p> </HashLink></div>
          <div className={navbar.navDiv}> <HashLink to={"/#About"} duration={500}  smooth><p className={navbar.link} >ABOUT</p> </HashLink></div> 
         <div className={navbar.navDiv} > <HashLink to={"/#Project"} smooth><p className={navbar.link} >PROJECTS</p> </HashLink></div> 
         <div className={navbar.navDiv}  ><HashLink to={"/#Skills"} smooth><p className={navbar.link} >SKILLS</p> </HashLink></div> 
        <div className={navbar.navDiv}  ><HashLink to={"/#Contact"} smooth><p className={navbar.link} >CONTACT</p> </HashLink></div> 
    </div>
  )
}
