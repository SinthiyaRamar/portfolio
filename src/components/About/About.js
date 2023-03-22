import React from "react";
import about from "./About.module.css";
export default function About() {
  return (
    <div id="About" className={about.aboutpage}>
      <div className={about.aboutdiv}>
        <div className={about.aboutmetitlediv}>
          <h1>About Me</h1>
        </div>
        <div className={about.aboutdetailsdiv}>
          <div className={about.aboutimagediv}>
            <div className={about.aboutimgdiv}>
              <figure className={about.swing}>
                <img
                  className={about.aboutmeimg}
                  src="images/developer.jpg"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div className={about.aboucontentdiv}>
            <div className={about.aboutdetails}>
              <ul>
                <li>I am Sinthiya Ramar.</li>
                <li> I have completed my 12th standard .</li>
                <li>My native is Keelapvoor.</li>
                <li>I was born on November 28th, 2005.</li>
                <li>
                  I love coding because it challenges me to think creatively and
                  solve problems.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={about.mailiddiv}>
          <h2>
            <span className={about.mailidtext}>Mail : </span>
            sinthiya.r@zohocorp.com
          </h2>
        </div>
      </div>
    </div>
  );
}
