import React from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
      alert("Mensaje enviado! 👍");
     
  }, (error) => {
      alert(error.message)
      
  });
  e.target.reset()


}

  return (
    <div>
    <div className="container">
      <h2 className="h2">CONTACTO</h2>
      <form className="contact-form" onSubmit={sendEmail}>
      <div className="row pt-5 mx-auto">
        <div className="col-lg-8 col-sm-12 form-group mx-auto">
          <label>Nombre</label>
          <input type="text" autoFocus className="form-control" required placeholder="Nombre" name="user_name" />
        </div>
      </div>
      <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
        <label>Mensaje</label>
        <textarea lassName="form-control" id="" cols="30" rows="8" required placeholder="Su Mensaje" name="message" />
      </div>
      <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
        <input type="submit" className="btn btn-info" value="Enviar"></input>
      </div>       
      </form>
    </div>
  </div>
  );
}
