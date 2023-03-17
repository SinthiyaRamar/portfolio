import React from 'react'
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import whole from './Whole.module.css';
import {Route,Routes} from 'react-router-dom'
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
export default function Whole() {
  return (
    <div className={whole.wholediv}  >
        {/* <Home/> */}
        <div className={whole.navbar} ><Navbar/></div>
        <div className={whole.main} >
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/Skills'  element={<Skills/>}/>
            <Route path='/Contact' element={<Contacts/>}/>
        </Routes> 
        
        </div> 
     
     
    </div>
  )
}
