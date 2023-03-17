import React from 'react'
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
// import Navbar from '../Navbar/Navbar';
import home from './Home.module.css';
export default function Home() {
  return (
    <div className={home.wholehomepage} >
    <div className={home.homepage} >
        <div className={home.homefullpagebackground}>
           {/* <div className={home.navbarpage} >
            {/* <Navbar/> */}
           {/* </div> */} 
           <div className={home.mypage} >

            <div className={home.mynamediv} >
                   <h2 className={home.hellotext} >Hello!</h2>
                   <h1 className={home.myname}><span>I'm Sinthiya R</span></h1>
                   <h3 className={home.text}> Frontend Developer</h3>
            </div>
            <div className={home.myimage} >
             <div className={home.myimagediv} >
               <img className={home.myimgtag} src="images/sinthiya.JPG" alt="" /> 
            </div>

            </div>
           </div>
        </div>
    </div>
    <About/>
    <Projects/>
    <Skills/>
    <Contacts/>
    </div>
  )
}
