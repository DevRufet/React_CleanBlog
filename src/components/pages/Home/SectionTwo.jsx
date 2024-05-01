import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
function SectionTwo() {
  return (
    <>
   
       <section id="hero_clean_blog_about">
       <div className="hero_clean_blog_about_container">
       <div className="hero_clean_blog_about_container_ab1"><h2>Man must explore, and this is exploration at its greatest</h2></div>
       <div className="hero_clean_blog_about_container_ab2"><h3>Problems look mighty small from 150 miles up</h3></div>
       <div className="hero_clean_blog_about_container_ab3"><p >Posted by <Link>Start Bootstrap</Link>  on September 24, 2023</p></div>
       <div className="hero_clean_blog_about_container_ab4"><h2>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2></div>
       <div className="hero_clean_blog_about_container_ab5">Posted by Start Bootstrap on September 18, 2023</div>
       <div className="hero_clean_blog_about_container_ab6"><h2>Science has not yet mastered prophecy</h2></div>
       <div className="hero_clean_blog_about_container_ab7"><h3>We predict too much for the next year and yet far too little for the next ten.</h3></div>
       <div className="hero_clean_blog_about_container_ab8">Posted by Start Bootstrap on August 24, 2023</div>
       <div className="hero_clean_blog_about_container_ab9"><h2>Failure is not an option</h2></div>
       <div className="hero_clean_blog_about_container_ab10"><h3>Many say exploration is part of our destiny, but it’s actually our duty to future generations</h3></div>
       <div className="hero_clean_blog_about_container_ab11">Posted by Start Bootstrap  on July 8, 2023</div>
<button className="hero_clean_blog_about_container_btn">
OLDER POSTS
          <i className="fa-thin fa-arrow-right"></i>
</button>
       </div>
       </section>
    </>
  )
}

export default SectionTwo
