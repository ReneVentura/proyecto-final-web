import React from 'react'
import emailjs from 'emailjs-com'
import './form.scss'


export default function Form(){
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_l81ebka', 'template_cpz2g1o', e.target, 'user_9dde6FyA9RvWiZYxZx70Q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          window.alert("Enviado")
      }
    return(
            <div className="ff">
            <form onSubmit={sendEmail}>

                <input type="text" placeholder="Nombre " required name="name"/>
                <input type="text" placeholder="Email" required name="email"/>
                <input type="text" placeholder="Tema" required name="subject"/>
                <textarea placeholder="Subject" required name="message"></textarea>
                <input type="submit" value="Send"/>
            </form>
            </div>
        )
}