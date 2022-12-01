import React from 'react'

//styles
import './AppDesign.scss'
import airfilter from '../../assets/app-design/desktop/image-airfilter.jpg'
import eyecam from '../../assets/app-design/desktop/image-eyecam.jpg'
import faceit from '../../assets/app-design/desktop/image-faceit.jpg'
import todo from '../../assets/app-design/desktop/image-todo.jpg'
import loopStudios from '../../assets/app-design/desktop/image-loopstudios.jpg'
import webDesign from '../../assets/home/mobile/image-web-design.jpg'
import graphicDesign from '../../assets/home/mobile/image-graphic-design.jpg'

// components
import HeroCard from '../../Components/HeroCard/HeroCard'
import WorksCards from '../../Components/WorksCards/WorksCards'
import ProjectsCards from '../../Components/ProjectCards/ProjectCards'
import Footer from '../../Components/Footer/Footer'

const worksCards = [
  {
    image: airfilter,
    heading: 'Airfilter',
    subHeading:
      'Solving the problem of poor indoor air quality by filtering the air',
  },
  {
    image: eyecam,
    heading: 'Eyecam',
    subHeading:
      'Product that lets you edit your favorite photos and videos at any time',
  },
  {
    image: faceit,
    heading: 'Faceit',
    subHeading:
      'Get to meet your favorite internet superstar with the faceit app',
  },
  {
    image: todo,
    heading: 'Todo',
    subHeading: 'A todo app that features cloud sync with light and dark mode',
  },
  {
    image: loopStudios,
    heading: 'LoopStudios',
    subHeading: 'A VR experience app made for Loopstudios',
  },
]
const projectCards = [
  {
    background: webDesign,
    heading: 'Web Design',
    href: '/web-design',
  },
  {
    background: graphicDesign,
    heading: 'Graphic Design',
    href: '/graphic-design',
  },
]

export default function AppDesign() {
  return (
    <React.Fragment>
      <main className="web-design">
        <section className="hero">
          <HeroCard
            heading="App Design"
            subHeading="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
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
