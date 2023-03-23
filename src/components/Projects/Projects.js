import React, { useState } from "react";
import Assignment from "../Assignment/Assignment";
import project from "./Projects.module.css";

export default function Projects() {
  const [kanban, isKanban] = useState(false);
  const [invoice, isInvoice] = useState(false);
  const [notesapp, isNotes] = useState(false);
  const [dictionary, isDictionary] = useState(false);
  const [quiz, isQuiz] = useState(false);
  const [kanbanview, isKanbanview] = useState(false);
  const [invoiceview, isInvoiceview] = useState(false);
  const [notesappview, isNotesview] = useState(false);
  const [dictionaryview, isDictionaryview] = useState(false);
  function handleviewMouseEnter(nameoftheproject) {
    if (nameoftheproject === "kanban") {
      isKanbanview(true);
    }
    if (nameoftheproject === "invoice") {
      isInvoiceview(true);
    }
    if (nameoftheproject === "dictionary") {
      isDictionaryview(true);
    }
    if (nameoftheproject === "notesapp") {
      isNotesview(true);
    }
  }
  function handleviewMouseLeave(nameoftheproject) {
    if (nameoftheproject === "kanban") {
      isKanbanview(false);
    }
    if (nameoftheproject === "invoice") {
      isInvoiceview(false);
    }
    if (nameoftheproject === "dictionary") {
      isDictionaryview(false);
    }
    if (nameoftheproject === "notesapp") {
      isNotesview(false);
    }
  }
  function handleMouseEnter(projectname) {
    if (projectname === "kanban") {
      isKanban(true);
    }
    if (projectname === "invoice") {
      isInvoice(true);
    }
    if (projectname === "notesapp") {
      isNotes(true);
    }
    if (projectname === "dictionary") {
      isDictionary(true);
    }
    if (projectname === "quiz") {
      isQuiz(true);
    }
    console.log(kanban);
  }
  function handleMouseLeave(projectname) {
    if (projectname === "kanban") {
      isKanban(false);
    }
    if (projectname === "invoice") {
      isInvoice(false);
    }
    if (projectname === "notesapp") {
      isNotes(false);
    }
    if (projectname === "dictionary") {
      isDictionary(false);
    }
    if (projectname === "quiz") {
      isQuiz(false);
    }
    console.log(kanban);
  }

  return (
    <div id="Project" className={project.projectPage}>
      <div className={project.projectDetails}>
        <div className={project.projects}>
          <div>
            <h1 className={project.projecttext}>Projects</h1>
          </div>
          <div className={project.project1}>
            <div></div>
            <div className={project.stylesdiv}>
              <div
                className={project.kanbandiv}
                onMouseLeave={() => handleMouseLeave("kanban")}
                onMouseEnter={() => handleMouseEnter("kanban")}
              >
                <img
                  className={project.kanbanimage}
                  src="./images/kanban.png"
                  alt=""
                />
                <div
                  style={{ display: kanban ? "block" : "none" }}
                  className={project.kanbandescriptiondiv}
                >
                  <div className={project.descriptionstyle}>
                    <h1 className={project.apptitle}> Kanban App</h1>
                    <div className={project.appdescription}>
                      {/* <p>A kanban board is an agile project management tool, limit work-in-progress.</p> */}
                      <p>I used the Node.js framework in this project</p>
                    </div>
                    <div className={project.viewdiv}>
                      <div
                        className={project.kanbanviewdiv}
                        onClick={() => handleviewMouseEnter("kanban")}
                      >
                        {" "}
                        view
                      </div>
                    </div>
                  </div>
                  <div
                    onMouseLeave={() => handleviewMouseLeave("kanban")}
                    style={{ display: kanbanview ? "block" : "none" }}
                    className={project.kanbanvideodiv}
                  >
                    <video className={project.kanbanvideo} controls>
                      <source src="./images/kanbanvideo.webm" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className={project.stylesdiv}>
              <div
                onMouseLeave={() => handleMouseLeave("invoice")}
                onMouseEnter={() => handleMouseEnter("invoice")}
                className={project.invoicediv}
              >
                <img
                  className={project.invoiceimage}
                  alt=""
                  src="./images/invoice logo.jpg"
                />
                <div
                  style={{ display: invoice ? "block" : "none" }}
                  className={project.invoicedescriptiondiv}
                >
                  <div className={project.descriptionstyle}>
                    <h1 className={project.apptitle}> Invoice App</h1>
                    <div className={project.appdescription}>
                      {/* <p>A sales invoice serves to inform the buyer or customer of the goods or services they purchased and the total amount they owe</p> */}
                      <p>I used the Node.js framework in this project</p>
                    </div>
                    <div className={project.viewdiv}>
                      <div
                        onClick={() => handleviewMouseEnter("invoice")}
                        className={project.invoiceviewdiv}
                      >
                        view
                      </div>
                    </div>
                  </div>
                  <div
                    onMouseLeave={() => handleviewMouseLeave("invoice")}
                    style={{ display: invoiceview ? "block" : "none" }}
                    className={project.kanbanvideodiv}
                  >
                    <video className={project.kanbanvideo} controls>
                      <source src="./images/invoice.webm" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className={project.stylesdiv}>
              <div
                onMouseLeave={() => handleMouseLeave("notesapp")}
                onMouseEnter={() => handleMouseEnter("notesapp")}
                className={project.notesappdiv}
              >
                <img
                  className={project.notesappimage}
                  alt=""
                  src="./images/notesapp.png"
                />
                <div
                  style={{ display: notesapp ? "block" : "none" }}
                  className={project.notesappdescriptiondiv}
                >
                  <div className={project.descriptionstyle}>
                    <h1 className={project.apptitle}> Notes App</h1>
                    <div className={project.appdescription}>
                      {/* <p>Use the Notes app to quickly capture your thoughts.</p> */}
                      <p>I used the Node.js framework in this project</p>
                    </div>
                    {/* <div className={project.viewdiv}>
                             <div onClick={()=>handleviewMouseEnter("notesapp")} className={project.notesappviewdiv}>view</div>
                             </div>
                          </div>
                          <div  onMouseLeave={()=>handleviewMouseLeave("notesapp")} style={{display : notesappview ? 'block' : 'none'}}  className={project.kanbanvideodiv} >
                          {/* <video  className={project.kanbanvideo} controls>
                              <source src="./images/notesapp.webm" type="video/mp4" />
                           </video> */}
                    {/* </div> */}
                    <div className={project.viewdiv}>
                      <div className={project.notesappviewdiv}>
                        <a
                          className={project.quizatag}
                          href="https://github.com/SinthiyaRamar/MyNotesApp"
                          rel="noreferrer"
                          target="_blank"
                        >
                          {" "}
                          view
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={project.project2}>
            <div></div>
            <div className={project.stylesdiv}>
              <div
                onMouseLeave={() => handleMouseLeave("dictionary")}
                onMouseEnter={() => handleMouseEnter("dictionary")}
                className={project.dictionarydiv}
              >
                <img
                  className={project.dictionaryimage}
                  alt=""
                  src="./images/dictionary.png"
                />
                <div
                  style={{ display: dictionary ? "block" : "none" }}
                  className={project.dictionarydescriptiondiv}
                >
                  <div className={project.descriptionstyle}>
                    <h1 className={project.apptitle}> Dictionary</h1>
                    <div className={project.appdescription}>
                      {/* <p>flexible endpoints including headwords, parts of speech, definitions, translations, audio, and more… </p> */}
                      <p>I used the Node.js framework in this project</p>
                    </div>
                    <div className={project.viewdiv}>
                      <div
                        onClick={() => handleviewMouseEnter("dictionary")}
                        className={project.dictionaryviewdiv}
                      >
                        view
                      </div>
                    </div>
                  </div>
                  <div
                    onMouseLeave={() => handleviewMouseLeave("dictionary")}
                    style={{ display: dictionaryview ? "block" : "none" }}
                    className={project.kanbanvideodiv}
                  >
                    <video className={project.kanbanvideo} controls>
                      <source src="./images/dictionary.webm" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className={project.stylesdiv}>
              <div
                onMouseLeave={() => handleMouseLeave("quiz")}
                onMouseEnter={() => handleMouseEnter("quiz")}
                className={project.quizdiv}
              >
                <img
                  className={project.quizimage}
                  alt=""
                  src="./images/quiz.png"
                />
                <div
                  style={{ display: quiz ? "block" : "none" }}
                  className={project.quizdescriptiondiv}
                >
                  <div className={project.descriptionstyle}>
                    <h1 className={project.apptitle}> Quiz Game</h1>
                    <div className={project.appdescription}>
                      {/* <p>Quiz, a contest in which participants test what they know by answering questions on one or more topics.</p> */}
                      <p>I used the js in this project</p>
                    </div>
                    <div className={project.viewdiv}>
                      <div className={project.quizviewdiv}>
                        <a
                          className={project.quizatag}
                          href="https://final-project.sinthiya28.repl.co/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          {" "}
                          view
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={project.myworkdetails}>
        <Assignment />
      </div>
    </div>
  );
}
