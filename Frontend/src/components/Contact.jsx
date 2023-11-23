import React from 'react'
import '../Styles/Contact.css'

function Contact() {
  return (
    <>
      <section className='contact-section'>
        <div className="contact-heading">
          We would like to get in touch with you :)
        </div><br></br>
        <form className="contact-form">
          <label className='contact-label'>Your name:</label> <br />
          <input className='contact-input' type="text" placeholder="John Doe" /><br></br>

          <label className='contact-label'>Your email:</label><br />
          <input className='contact-input' type="text" placeholder="xyz@gmail.com" /><br />

          <label className='contact-label'>Your message to us:</label><br />
          <textarea className='contact-textarea' placeholder="Your message here..."></textarea><br></br>

          <button className='contact-button' type="submit">Send</button>
        </form>
      </section>
    </>
  )
}

export default Contact