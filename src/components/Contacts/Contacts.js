import React,{useRef} from 'react'
import contact from './Contacts.module.css'
import emailjs from 'emailjs-com'


export default function Contacts() {
  const form  = useRef(null);
  function sendEmail(e){
     e.preventDefault();
    emailjs.sendForm('service_gxa4mah','template_4cr0dal',form.current,'ZOTKcBU4zy14injyW').then(res=>{
      console.log(res);
    }).catch(err=>{
       console.log(err);
    });
    e.target.reset();
  }
  return (
    <div id="Contact" className={contact.contactpage} >
      <div className={contact.contactwholediv}>
        <div className={contact.titlediv}>
          <h1>Contact</h1>
        </div>
        <div className={contact.contactdivs}>
          <div className={contact.gifdiv}>
            <img className={contact.gifimg} src="./images/contact.gif" alt=""/>
          </div>
        <form  ref={form} onSubmit={sendEmail} className={contact.form} >
            <div className={contact.inputdiv}>
             
              <label name="labelusername" >User Name</label>
              <input name="name" className={contact.username} type="text" autoComplete='off'/>
              <label name="labelusername">Email Address</label>
              <input name="mail" className={contact.userid} type="text" autoComplete='off' />
              <label name="usernamedescription" >Description</label>
              <textarea  name="message" className={contact.description} ></textarea>
              <input className={contact.submit} type="submit"/>
            </div>
            </form>

        </div>
      </div>
    </div>
  )
}
