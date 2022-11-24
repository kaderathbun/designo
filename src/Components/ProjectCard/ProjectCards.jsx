import React from 'react'

//styles
import './ProjectCards.scss'
import webDesign from '../../assets/home/mobile/image-web-design.jpg'
import appDesign from '../../assets/home/mobile/image-app-design.jpg'
import graphicDesign from '../../assets/home/mobile/image-graphic-design.jpg'

// card data
const cards = [
  {
    background: webDesign,
    heading: 'Web Design',
  },
  {
    background: appDesign,
    heading: 'App Design',
  },
  {
    background: graphicDesign,
    heading: 'Graphic Design',
  },
]

export default function ProjectsCard() {
  return cards.map((card) => {
    return (
      <div key={card.heading} className="projects__card">
        <img
          className="projects__background"
          src={card.background}
          alt={card.heading}
        />
        <div className="projects__wrapper">
          <h2 className="projects__heading">{card.heading}</h2>
          <p className="projects__sub-heading">View Projects</p>
        </div>
        <a href="#" className="projects__overlay"></a>
      </div>
    )
  })
}
