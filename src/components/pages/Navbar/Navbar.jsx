import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
  return (
   <>
   <header id="hero" >
        <nav>
            <div className="container">
             <div className="container_sb">
                <a href="">Start Bootstrap</a>
            </div>
             <div className="container_pages">
                <ul className="container_pages_li">
                    <li><Link to={"home"}>Home</Link></li>
                    <li><Link to={"about"}>About</Link></li>
                    <li><Link to={"samplepost"}>Sample Post</Link></li>
                    <li><Link to={"contact"}>Contact</Link></li>
                </ul>
             </div>
             <button className="container_btn">
                MENU
                <i class="fa-solid fa-bars"></i>
             </button>
            </div>
        </nav>
    </header>
   
   
   </>
  )
}

export default Navbar
