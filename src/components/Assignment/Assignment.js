import React, { useState } from 'react'
import assign from './Assignment.module.css'
export default function Assignment() {
  const [js,isJs]=useState(true);
  const [html,isHtml]=useState(false);
  const [node,isNode]=useState(false);
  const [react,isReact]=useState(false);
  const [api,isApi]=useState(false);

  function handleOnclick(project){
    if(project==='js'){
      isJs(true);
      isHtml(false)
      isNode(false);
      isReact(false);
      isApi(false);
    }
    if(project==='html'){
      isJs(false);
      isHtml(true)
      isNode(false);
      isReact(false);
      isApi(false);
    }
    if(project==='node'){
      isJs(false);
      isHtml(false)
      isNode(true);
      isReact(false);
      isApi(false);
    }
    if(project==='react'){
      isJs(false);
      isHtml(false)
      isNode(false);
      isReact(true);
      isApi(false);
    }
    if(project==='api'){
      isJs(false);
      isHtml(false)
      isNode(false);
      isReact(false);
      isApi(true);
    }

  }
  return (
<div className={assign.assignmentpage} >
    <div className={assign.assignmentdiv} >
          <div className={assign.myworktextdiv} >
            <h1>My Works</h1>
          </div>
          <div className={assign.projectlistdiv} >
          <div className={assign.projectlistitemdiv} >

            <div onClick={()=>handleOnclick("js")} style={{background : js ? '#4ea94e' : 'rgb(159 155 155)'}} className={assign.jsdiv} >VANILLA JS</div>
            <div onClick={()=>handleOnclick("html")} style={{background : html ? '#4ea94e' : 'rgb(159 155 155)'}} className={assign.htmldiv} >HTML/CSS</div>
            <div onClick={()=>handleOnclick("node")} style={{background : node ? '#4ea94e' : 'rgb(159 155 155)'}} className={assign.nodediv} >NODE JS</div>
            <div onClick={()=>handleOnclick("react")} style={{background : react ? '#4ea94e' : 'rgb(159 155 155)'}} className={assign.reactdiv} >REACT</div>
            <div onClick={()=>handleOnclick("api")} style={{background : api ? '#4ea94e' : 'rgb(159 155 155)'}} className={assign.apidiv} >API</div>
            {/* <div></div> */}
           </div>
          </div>
          <div  className={assign.projectsdiv}  >
            {/* js */}
            <div  style={{display : js ? 'block' : 'none'}} className={assign.projectsjsdiv} >
              <div className={assign.jswholedivs} >
              <div className={assign.firsthalf} >
            {/* Quiz Game */}
            <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} rel="noreferrer" href="https://final-project.sinthiya28.repl.co/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Quiz Game</h2></div>
                <img className={assign.projectimg} src='./images/quiz.png' alt="projectjs"/>
              </div>
              </a>
              </div>
          {/* Password Generator */}
             <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} rel="noreferrer"  href="https://stirring-otter-97758d.netlify.app/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Password Generator</h2></div>
                <img className={assign.projectimg} src='./images/password.png' alt="projectjs"/>
              </div>
              </a>
              </div>

            {/* Tic Tac Toe */}
            <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://tictactoe.sinthiya28.repl.co/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Tic Tac Toe</h2></div>
                <img className={assign.projectimg} src='./images/tictactoe.png' alt="projectjs"/>
              </div>
              </a>
              </div>
              </div>
              <div className={assign.secondhalf} >

              {/* Music player */}
              <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://music-player-assign8.sinthiya28.repl.co/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Music Player</h2></div>
                <img className={assign.projectimg} src='./images/musicplayer.png' alt="projectjs"/>
              </div>
              </a>
              </div>
              {/* calculator */}
              <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://js-assignment-5.sinthiya28.repl.co/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>calculator</h2></div>
                <img className={assign.projectimg} src='./images/calculator.png' alt="projectjs"/>
              </div>
              </a>
              </div>
              <div></div>
              </div>
              </div>
              </div>

               {/* HTML/CSS */}
            <div  style={{display : html ? 'block' : 'none'}} className={assign.projectshtmldiv} >
              <div className={assign.jswholedivs} >
              <div className={assign.firsthalf} >
            {/* Space Tourism */}
            <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://space.sinthiya28.repl.co/destination.html" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Space Tourism</h2></div>
                <img className={assign.projectimg} src='./images/spacetourism.png' alt="projecthtml"/>
              </div>
              </a>
              </div>
          {/* Skilled Landing Page */}
             <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://assignment11-skilled.sinthiya28.repl.co/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Skilled Landing Page</h2></div>
                <img className={assign.projectimg} src='./images/skill.png' alt="projecthtml"/>
              </div>
              </a>
              </div>

            {/* Suite Landing Page */}
            <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://suite-landing-page.sinthiya28.repl.co/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Suite Landing Page</h2></div>
                <img className={assign.projectimg} src='./images/suite.png' alt="projecthtml"/>
              </div>
              </a>
              </div>
              </div>
              <div className={assign.secondhalf} >

              {/* Card Component */}
              <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://card-component-assignment6.sinthiya28.repl.co/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Card Component</h2></div>
                <img className={assign.projectimg} src='./images/cardcomponent.png' alt="projecthtml"/>
              </div>
              </a>
              </div>
              {/* 3 Column Card Component */}
              <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} rel="noreferrer"  href="https://3column-card-component-7.sinthiya28.repl.co/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>3 Column Card Component</h2></div>
                <img className={assign.projectimg} src='./images/2cardcomponent.png' alt="projecthtml"/>
              </div>
              </a>
              </div>
              {/*Formula-Fixelarity  */}
              <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://connect.zoho.com/portal/zohoschools-2024/tags/html" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Formula-Fixelarity</h2></div>
                <img className={assign.projectimg} src='./images/formula.png' alt="projecthtml"/>
              </div>
              </a>
              </div>
              </div>
              </div>
              </div>


           {/* Node js */}
            <div  style={{display : node ? 'block' : 'none'}} className={assign.projectshtmldiv} >
              <div className={assign.jswholedivs} >
              <div className={assign.firsthalf} >
            {/* Kanban */}
            <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://github.com/SinthiyaRamar/kanban-App" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Kanban</h2></div>
                <img className={assign.projectimg} src='./images/kanban.png' alt="projectnode"/>
              </div>
              </a>
              </div>
          {/* Invoice */}
             <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://github.com/SinthiyaRamar/Invoice" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Invoice</h2></div>
                <img className={assign.projectimg} src='./images/invoice logo.jpg' alt="projectnode"/>
              </div>
              </a>
              </div>

            {/* Dictionary */}
            <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://github.com/SinthiyaRamar/Dictionary" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Dictionary</h2></div>
                <img className={assign.projectimg} src='./images/dictionaryimage.png' alt="projectnode"/>
              </div>
              </a>
              </div>
              </div>
              <div className={assign.secondhalf} >

              {/* ipaddress */}
              <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://github.com/SinthiyaRamar/IP_Address_Tracker" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Ip Address Tracker</h2></div>
                <img className={assign.projectimg} src='./images/ipaddress.png' alt="projectnode"/>
              </div>
              </a>
              </div>
              {/* Notes aPP */}
              <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://github.com/SinthiyaRamar/MyNotesApp" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Notes App</h2></div>
                <img className={assign.projectimg} src='./images/notes.png' alt="projectnode"/>
              </div>
              </a>
              </div>
              {/*Formula-Fixelarity  */}
              {/* <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="https://connect.zoho.com/portal/zohoschools-2024/tags/html" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Formula-Fixelarity</h2></div>
                <img className={assign.projectimg} src='./images/formula.png' art="projecthtml"/>
              </div>
              </a>
              </div> */}
              </div>
              </div>
              </div>
              {/* {} */}
  

              {/* react */}
            <div  style={{display : react ? 'block' : 'none'}} className={assign.projectshtmldiv} >
              <div className={assign.jswholedivs} >
              <div className={assign.firsthalf} >
            {/* rest countries */}
            <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://apicountry.netlify.app/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Rest Countries</h2></div>
                <img className={assign.projectimg} src='./images/restcountries.png' alt="projectreact"/>
              </div>
              </a>
              </div>
          {/* my portfolio */}
             {/* <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Portfolio</h2></div>
                <img className={assign.projectimg} src='./images/portfolio.png' art="projectreact"/>
              </div>
              </a>
              </div> */}

            {/* Dictionary
            <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="https://github.com/SinthiyaRamar/Dictionary" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Dictionary</h2></div>
                <img className={assign.projectimg} src='./images/dictionaryimage.png' art="projectnode"/>
              </div>
              </a>
              </div>*/}
              </div> 
              <div className={assign.secondhalf} >

              {/* ipaddress */}
              {/* <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="https://github.com/SinthiyaRamar/IP_Address_Tracker" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Ip Address Tracker</h2></div>
                <img className={assign.projectimg} src='./images/ipaddress.png' art="projectnode"/>
              </div>
              </a>
              </div> */}
              {/* Notes aPP */}
              {/* <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="https://github.com/SinthiyaRamar/MyNotesApp" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Notes App</h2></div>
                <img className={assign.projectimg} src='./images/notes.png' art="projectnode"/>
              </div>
              </a>
              </div> */}
              {/*Formula-Fixelarity  */}
              {/* <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="https://connect.zoho.com/portal/zohoschools-2024/tags/html" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Formula-Fixelarity</h2></div>
                <img className={assign.projectimg} src='./images/formula.png' art="projecthtml"/>
              </div>
              </a>
              </div> */}
              </div>
              </div>
              </div>
              {/* {} */}

                {/* api */}
            <div  style={{display : api ? 'block' : 'none'}} className={assign.projectshtmldiv} >
              <div className={assign.jswholedivs} >
              <div className={assign.firsthalf} >
           {/* Dictionary */}
           <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://github.com/SinthiyaRamar/Dictionary" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Dictionary</h2></div>
                <img className={assign.projectimg} src='./images/dictionaryimage.png' alt="projectnode"/>
              </div>
              </a>
              </div>
              {/* ipaddress */}
              <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://github.com/SinthiyaRamar/IP_Address_Tracker" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Ip Address Tracker</h2></div>
                <img className={assign.projectimg} src='./images/ipaddress.png' alt="projectnode"/>
              </div>
              </a>
              </div>

            {/* rest countries */}
            <div className={assign.projectwholediv} >
               <a rel="noreferrer"  className={assign.projectdiv} href="https://apicountry.netlify.app/" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Rest Countries</h2></div>
                <img className={assign.projectimg} src='./images/restcountries.png' alt="projectreact"/>
              </div>
              </a>
              </div>
              </div>
              <div className={assign.secondhalf} >

              {/* ipaddress */}
              {/* <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="https://github.com/SinthiyaRamar/IP_Address_Tracker" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Ip Address Tracker</h2></div>
                <img className={assign.projectimg} src='./images/ipaddress.png' art="projectnode"/>
              </div>
              </a>
              </div> */}
              {/* Notes aPP */}
              {/* <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="https://github.com/SinthiyaRamar/MyNotesApp" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Notes App</h2></div>
                <img className={assign.projectimg} src='./images/notes.png' art="projectnode"/>
              </div>
              </a>
              </div> */}
              {/*Formula-Fixelarity  */}
              {/* <div className={assign.projectwholediv} >
               <a className={assign.projectdiv} href="https://connect.zoho.com/portal/zohoschools-2024/tags/html" target="_blank" >
              <div className={assign.projectcontent} >
                 <div className={assign.projecttitle} ><h2>Formula-Fixelarity</h2></div>
                <img className={assign.projectimg} src='./images/formula.png' art="projecthtml"/>
              </div>
              </a>
              </div> */}
              </div>
              </div>
              </div>
              {/* {} */}

          </div>

        </div>
    </div>
  )
}
