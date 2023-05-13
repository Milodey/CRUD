import React from 'react'
import video from '../assets/video.mp4'

const Home = () => {
  return (
    <>
    <section className="showcase">
  <header>
    <h2 className="logo animate__bounceInLeft delay-2s">NIRMALLYA DEY</h2>
    
  </header>
  <video src={video} muted loop autoPlay />
  <div className="overlay" />
  <div className="text">
    <h2>A Positive Mindset</h2>
    <h3>brings positive things.</h3>
    <p>
      Having a positive mindset, or positive mental attitude, means that you are
      optimistic about the world around you, and you expect that good things
      will happen to you. In contrast, a negative attitude, or mindset,
      indicates that you expect bad things to happen and struggle to perceive
      the world in a positive way.
    </p>
    <a href="https://www.nirmallya.me/" target="_blank">
      Explore
    </a>
  </div>
  <ul className="social">
    <li>
      <a href="#">
        <img src="https://i.ibb.co/x7P24fL/facebook.png" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/DeyMilo">
        <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/milo.dey/">
        <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
      </a>
    </li>
  </ul>
</section>


    
    </>
  )
}

export default Home