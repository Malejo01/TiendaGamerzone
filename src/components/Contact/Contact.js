import React from 'react'
import "./styles.css"

function Contact() {

    function validateForm() {
        
    }
    
    return (
      <div className='formularioDeContacto'>
      <section className="mb-4">
      
          <p className="text-center w-responsive mx-auto mb-5 pContacto">¿Tienes alguna consulta? Por favor no dudes en contactarnos directamente. ¡Nuestro equipo estara contigo en pocas horas para ayudarte!</p>
      
          <div className="row">
      
              <div className="col-md-9 mb-md-0 mb-5">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">
      
                      <div className="row">
      
                          <div className="col-md-6">
                              <div className="md-form mb-0">
                                  <input type="text" id="name" name="name" className="form-control" placeholder='Ingresa tu nombre'></input>
                                  <label for="name" className="">Tu nombre</label>
                              </div>
                          </div>
                          
                          <div className="col-md-6">
                              <div className="md-form mb-0">
                                  <input type="text" id="email" name="email" className="form-control" placeholder='Ingresa tu e-mail'></input>
                                  <label for="email" className="">Tu email</label>
                              </div>
                          </div>

                      </div>
                      
                      <div className="row">
                          <div className="col-md-12">
                              <div className="md-form mb-0">
                                  <input type="text" id="subject" name="subject" className="form-control" placeholder='Tema de tu consulta'></input>
                                  <label for="subject" className="">Tema</label>
                              </div>
                          </div>
                      </div>
                      
                      <div className="row">
      
                          
                          <div className="col-md-12">
      
                              <div className="md-form">
                                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder='Ingresa aqui tu consulta'></textarea>
                                  <label for="message">Tu mensaje</label>
                              </div>
      
                          </div>
                      </div>
                      
      
                  </form>
      
                  <div className="text-center text-md-left">
                      <a className="btn botonEnviar" onClick={validateForm()}
                      >Enviar</a>
                  </div>
                  <div className="status"></div>
              </div>
              

              <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
                      <li><i className="fas fa-map-marker-alt fa-2x"></i>
                          <p>Salta, CP 4400, Argentina</p>
                      </li>
      
                      <li><i className="fas fa-phone mt-4 fa-2x"></i>
                          <p>+ 03 03 456 6565</p>
                      </li>
      
                      <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                          <p>lizarragamauroalejandro@gmail.com</p>
                      </li>
                  </ul>
              </div>
        
      
          </div>
      
      </section>
      </div>
    )
}

export default Contact
