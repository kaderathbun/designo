import React from 'react'

//styles
import './WebDesign.scss'
import express from '../../assets/web-design/desktop/image-express.jpg'
import transfer from '../../assets/web-design/desktop/image-transfer.jpg'
import photon from '../../assets/web-design/desktop/image-photon.jpg'
import builder from '../../assets/web-design/desktop/image-builder.jpg'
import blogr from '../../assets/web-design/desktop/image-blogr.jpg'
import camp from '../../assets/web-design/desktop/image-camp.jpg'
import appDesign from '../../assets/home/mobile/image-app-design.jpg'
import graphicDesign from '../../assets/home/mobile/image-graphic-design.jpg'

//components
import HeroCard from '../../Components/HeroCard/HeroCard'
import WorksCards from '../../Components/WorksCards/WorksCards'
import ProjectsCards from '../../Components/ProjectCards/ProjectCards'
import Footer from '../../Components/Footer/Footer'

//data
const worksCards = [
  {
    image: express,
    heading: 'Express',
    subHeading: 'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    image: transfer,
    heading: 'Transfer',
    subHeading:
      'Site for low-cost money transfers and sending money within seconds',
  },
  {
    image: photon,
    heading: 'Photon',
    subHeading:
      'A state-of-the-art music player with high-resolution audio and DSP effects',
  },
  {
    image: builder,
    heading: 'Builder',
    subHeading: 'Connects users with local contractors based on their location',
  },
  {
    image: blogr,
    heading: 'Blogr',
    subHeading:
      'Blogr is a platform for creating an online blog or publication',
  },
  {
    image: camp,
    heading: 'Camp',
    subHeading:
      'Get expert training in coding, data, design, and digital marketing',
  },
]
const projectCards = [
  {
    background: appDesign,
    heading: 'App Design',
    href: '/app-design',
  },
  {
    background: graphicDesign,
    heading: 'Graphic Design',
    href: '/graphic-design',
  },
]

export default function WebDesign() {

  return (
    <React.Fragment>
      <main className="web-design">
        <section className="hero">
          <HeroCard
            isSecondary={false}
            heading="Web Design"
            subHeading="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
          />
        </section>
        <section className="works">
          {worksCards.map((card, idx) => {
            return (
              <WorksCards
                key={idx}
                image={card.image}
                heading={card.heading}
                subHeading={card.subHeading}
              />
            )
          })}
        </section>
        <section className="projects">
          {projectCards.map((card, idx) => {
            return (
              <ProjectsCards
                key={idx}
                heading={card.heading}
                background={card.background}
                href={card.href}
              />
            )
          })}
        </section>
      </main>
      <Footer isSecondary={false} />
    </React.Fragment>
  )
}
