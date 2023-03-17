import React from 'react'
import about from './About.module.css'
export default function About() {
  return (
    <div className={about.aboutpage} >
      <div className={about.aboutdiv}>
        <div className={about.aboutmetitlediv} >
          <h1>About Me</h1>
        </div>
        <div className={about.aboutdetailsdiv} >
          <div className={about.aboutimagediv} >
            <div className={about.aboutimgdiv} >
              <figure className={about.swing}>
              <img className={about.aboutmeimg} src="images/sinthiya.JPG" alt="" />
 
              </figure>
            </div>
          </div>
            <div className={about.aboucontentdiv} >
              <div className={about.aboutdetails}>
                <ul>
                  <li>I am Sinthiya Ramar.</li>
                  <li> I have completed my 12th standard education.</li>
                  <li>My native is keelapvoor.</li>
                  <li>I was born on November 28th, 2005.</li>
                  <li>I first began learning about programming when I entered Zoho.</li>
                  </ul> 
              </div>
            </div>
       
          
        </div>
        <div className={about.mailiddiv} >
                <h2><span className={about.mailidtext} >Mail : </span>sinthiya.r@zohocorp.com</h2>
            </div>
      </div>
    </div>
  )
}
