import React from 'react'
import skills from './Skills.module.css'

export default function Skills() {
  return (
    <div id="Skills" className={skills.skillspage} >
      <div className={skills.skilldiv} >
        <div className={skills.skilltextdiv} ><h1>Skills</h1></div>
      
      <div className={skills.skillsdetailsdiv} >
        <div></div>
         <div className={skills.skillcontent} >
             <div  className={skills.htmldiv} >
              <img className={skills.htmlimages} src='./images/html.jpg' alt="htmlimages"/>
             </div>
         </div>
         <div className={skills.skillcontent} >
         <div  className={skills.jsdiv} >
             <img className={skills.jsimages} src='./images/javascript.svg' alt="jsimages"/>

         </div>
          
          </div>
          <div className={skills.skillcontent} >
          <div  className={skills.nodejsdiv} >
          <img className={skills.nodejsimages} src='./images/nodejs.png' alt="nodejsimages"/>
          </div>
          </div>
          <div className={skills.skillcontent} >
          <div  className={skills.reactdiv} >
          <img className={skills.reactimages} src='./images/react.png' alt="reactimages"/>
          </div>
          </div>
      </div>
      <div className={skills.skillsdetailsdiv} >
        <div></div>
      <div className={skills.skillcontent} >
      <div  className={skills.javadiv} >
      <img className={skills.javaimages} src='./images/java.png' alt="javaimages"/>

      </div>
          
      </div>    
       <div className={skills.skillcontent} >
       <div  className={skills.scratchdiv} >
       <img className={skills.scratchimages} src='./images/scratch.jpg' alt="scratchimages"/>

       </div>
          
          </div>       
       <div className={skills.skillcontent} >
       <div  className={skills.jquerydiv} >
       <img className={skills.jqueryimages} src='./images/jquery-mark-dark.gif' alt="jqueryimages"/>

       </div>
          
          </div>
          <div className={skills.skillcontent} >
          <div  className={skills.mysqldiv} >
          <img className={skills.mysqlimages} src='./images/mysql.png' alt="mysqlimages"/>
          </div>
          
          </div>
      </div>
      </div>
      </div>
  )
}
