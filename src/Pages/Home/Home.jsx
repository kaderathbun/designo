import React from 'react'
import { Link } from 'react-router-dom'

//styles
import './Home.scss'

//components
import ProjectCards from '../../Components/ProjectCard/ProjectCards'

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
        <ProjectCards />
      </section>
      <section className="qualities">
        <div className="qualities__card">
          <img
            src={
              require('../../assets/home/desktop/illustration-passionate.svg')
                .default
            }
            alt="idk"
            className="qualities__img"
          />
          <h2 className="qualities__heading">Passionate</h2>
          <p className="qualities__sub-heading">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div className="qualities__card">
          <img
            src={
              require('../../assets/home/desktop/illustration-resourceful.svg')
                .default
            }
            alt=""
            className="qualities__img"
          />
          <h2 className="qualities__heading">Resourceful</h2>
          <p className="qualities__sub-heading">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
        <div className="qualities__card">
          <img
            src={
              require('../../assets/home/desktop/illustration-friendly.svg')
                .default
            }
            alt=""
            className="qualities__img"
          />
          <h2 className="qualities__heading">Friendly</h2>
          <p className="qualities__sub-heading">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
    </main>
  )
}
