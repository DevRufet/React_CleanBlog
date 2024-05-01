import React from 'react'
import './footer.scss'
function Footer() {
  return (
    <>
    <footer id="hero_social">
        <div className="hero_social_icons">
        <div className="social_icon"><i class="fa-brands fa-twitter"></i></div> 
        <div className="social_icon"><i class="fa-brands fa-facebook"></i></div>
        <div className="social_icon"><i class="fa-brands fa-github"></i></div>
        </div>
        <div className="hero_social_about">
          Copyright © Your Website 2023
        </div>
      </footer>
    </>
  )
}

export default Footer
