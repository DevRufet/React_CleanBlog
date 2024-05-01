import React from 'react'
import './contact.scss'
function Form() {
  return (
  <>
   
   {/* <section id="hero_contact_about">
            <div class="hero_contact_about_container">
                <div class="hero_contact_about_container_p">
                    Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!
                </div>
                <form action="" class="hero_contact_form">
                <input type="text" placeholder="Name" class="hero_contact_form_name">
                <input type="text" placeholder="Email Address" class="hero_contact_form_email">
                <input type="text" placeholder="Phone Number" class="hero_contact_form_phone">
                <textarea name="" id="" cols="30" rows="10" placeholder="Message" class="hero_contact_form_area"></textarea>
                <button class="hero_contact_btn">SEND</button>
                </form>
            </div>

        </section> */}
        <section id="hero_contact_about">
            <div className="hero_contact_about_container">
                <div className="hero_contact_about_container_p">
                Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!

                </div>
               <form action="" class="hero_contact_form">
                <input type="text" placeholder="Name" className="hero_contact_form_name"/>
                 <input type="text" placeholder="Email Address" className="hero_contact_form_email"/>
                 <input type="text" placeholder="Phone Number" className="hero_contact_form_phone"/>
                 <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="hero_contact_form_area"></textarea>
                 <button className="hero_contact_btn">SEND</button>
               </form>
            </div>
        </section>
  </>
  )
   
}
export default Form
