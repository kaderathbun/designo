import React from 'react'

//styles
import './About.scss'
import hero from '../../assets/about/mobile/image-about-hero.jpg'
import talent from '../../assets/about/mobile/image-world-class-talent.jpg'

//components
import HeroCard from '../../Components/HeroCard/HeroCard'

export default function About() {
  return (
    <React.Fragment>
      <main className="about">
        <section className="hero">
          <img src={hero} alt="Team meeting" />
          <HeroCard
            heading="About Us"
            subHeading="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
            isSecondary={true}
          />
          <img src={talent} alt="Talent" />
        </section>
      </main>
    </React.Fragment>
  )
}
