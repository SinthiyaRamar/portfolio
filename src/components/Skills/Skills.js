import React from 'react'
import skills from './Skills.module.css'

export default function Skills() {
  return (
     <div id="Skills" className={skills.skillspage} >
     <div className={skills.skilldiv} > 
           <div className={skills.skilltextdiv} ><h1>Skills</h1></div>
{/* //         <div className={skills.progress}>
//   <div className={skills.progressvalue}></div>
// </div> */}
{/* //  */}
 
<div className={skills.skillsVal_container}>
              <div className={skills.skillVal_div}>
                {/* <div className={skills.empty_skill_div}></div> */}
                <div className={skills.empty_skill_div2}>
                  
                  <div className={skills.pragross_div}>
                    <div
                      className={skills.prograssbar}
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="80"
                    ></div>
                  </div>
                  <div className={skills.skill1_container}>
                    <h2 className={skills.skill_title}>JS</h2>
                    <h2 className={skills.skill_title}>80%</h2>
                  </div>
                </div>
                <div className={skills.empty_skill_div2}>
                  
                  <div className={skills.pragross_div}>
                    <div
                      className={skills.prograssbar_node}
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="75"
                    ></div>
                  </div>
                  <div className={skills.skill1_container}>
                    <h2 className={skills.skill_title}>NODE JS</h2>
                    <h2 className={skills.skill_title}>75%</h2>
                  </div>
                </div>
                <div className={skills.empty_skill_div2}>
                  
                  <div className={skills.pragross_div}>
                    <div
                      className={skills.prograssbar_react}
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="40"
                    ></div>
                  </div>
                  <div className={skills.skill1_container}>
                    <h2 className={skills.skill_title}>REACT</h2>
                    <h2 className={skills.skill_title}>40%</h2>
                  </div>
                </div>
                <div className={skills.empty_skill_div2}>
                  
                  <div className={skills.pragross_div}>
                    <div
                      className={skills.prograssbar_html}
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="80"
                    ></div>
                  </div>
                  <div className={skills.skill1_container}>
                    <h2 className={skills.skill_title}>HTML/CSS</h2>
                    <h2 className={skills.skill_title}>80%</h2>
                  </div>
                </div>
                <div className={skills.empty_skill_div2}>
                  
                  <div className={skills.pragross_div}>
                    <div
                      className={skills.prograssbar_java}
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="40"
                    ></div>
                  </div>
                  <div className={skills.skill1_container}>
                    <h2 className={skills.skill_title}>JAVA</h2>
                    <h2 className={skills.skill_title}>40%</h2>
                  </div>
                </div>
                <div className={skills.empty_skill_div2}>
                  
                  <div className={skills.pragross_div}>
                    <div
                      className={skills.prograssbar_jqry}
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="80"
                    ></div>
                  </div>
                  <div className={skills.skill1_container}>
                    <h2 className={skills.skill_title}>JQUERY</h2>
                    <h2 className={skills.skill_title}>80%</h2>
                  </div>
                </div>
                <div className={skills.empty_skill_div2}>
                  
                  <div className={skills.pragross_div}>
                    <div
                      className={skills.prograssbar_scratch}
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="95"
                    ></div>
                  </div>
                  <div className={skills.skill1_container}>
                    <h2 className={skills.skill_title}>SCRATCH</h2>
                    <h2 className={skills.skill_title}>95%</h2>
                  </div>
                </div>
                <div className={skills.empty_skill_div2}>
                  
                  <div className={skills.pragross_div}>
                    <div
                      className={skills.prograssbar_mysql}
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="40"
                    ></div>
                  </div>
                  <div className={skills.skill1_container}>
                    <h2 className={skills.skill_title}>MYSQL</h2>
                    <h2 className={skills.skill_title}>40%</h2>
                  </div>
                </div>

{/* //  */}

      {/* <div className={skills.skillsdetailsdiv} >
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

         {/*  */}
          {/* </div> */} 

          </div> 
       </div>
      </div>
      </div>
  )
}
