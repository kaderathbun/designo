import React from 'react'
import { Link } from 'react-router-dom'

//styles
import './Home.scss'

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero__heading">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="hero__sub-heading">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link className="hero__cta">Learn More</Link>
        <img
          src={require('../../assets/home/desktop/image-hero-phone.png')}
          alt=""
          className="hero__img"
        />
      </section>
      <section className="projects">
        
      </section>
    </main>
  )
}
