import React from 'react'

//styles
import './GraphicDesign.scss'
import timBrown from '../../assets/graphic-design/desktop/image-change.jpg'
import boxedWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg'
import science from '../../assets/graphic-design/desktop/image-science.jpg'
import appDesign from '../../assets/home/mobile/image-app-design.jpg'
import webDesign from '../../assets/home/mobile/image-web-design.jpg'

//components
import HeroCard from '../../Components/HeroCard/HeroCard'
import WorksCards from '../../Components/WorksCards/WorksCards'
import ProjectsCards from '../../Components/ProjectCards/ProjectCards'
import Footer from '../../Components/Footer/Footer'

const worksCards = [
  {
    image: timBrown,
    heading: 'Tim Brown',
    subHeading: 'A book cover designed for Tim Brown’s new release, ‘Change’',
  },
  {
    image: boxedWater,
    heading: 'Boxed Water',
    subHeading: 'A simple packaging concept made for Boxed Water',
  },
  {
    image: science,
    heading: 'Science!',
    subHeading: 'A poster made in collaboration with the Federal Art Project',
  },
]
const projectCards = [
  {
    background: appDesign,
    heading: 'App Design',
  },
  {
    background: webDesign,
    heading: 'Web Design',
  },
]

export default function GraphicDesign() {
  return (
    <React.Fragment>
      <main className="web-design">
        <section className="hero">
          <HeroCard
            heading="Graphic Design"
            subHeading="We deliver eye-catching branding materials that are tailored to meet your business objectives."
          />
        </section>
        <section className="works">
          {worksCards.map((card) => {
            return (
              <WorksCards
                key={card.heading}
                image={card.image}
                heading={card.heading}
                subHeading={card.subHeading}
              />
            )
          })}
        </section>
        <section className="projects">
          {projectCards.map((card) => {
            return (
              <ProjectsCards
                heading={card.heading}
                background={card.background}
              />
            )
          })}
        </section>
      </main>
      <Footer isSecondary={false} />
    </React.Fragment>
  )
}
