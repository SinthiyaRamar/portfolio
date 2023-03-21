import React from 'react'
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import whole from './Whole.module.css';

export default function Whole() {
  return (
    <div className={whole.wholediv}  >

      <div className={whole.navbar} ><Navbar /></div>
      <div className={whole.main} >
      <Home />

      </div>


    </div>
  )
}
