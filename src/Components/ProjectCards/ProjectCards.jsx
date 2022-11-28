import React from 'react'

//styles
import './ProjectCards.scss'

export default function ProjectsCards({ heading, background }) {
  return (
    <div key={heading} className="projects__card">
      <img className="projects__background" src={background} alt={heading} />
      <div className="projects__wrapper">
        <h2 className="projects__heading">{heading}</h2>
        <p className="projects__sub-heading">View Projects</p>
      </div>
      <a href="#" className="projects__overlay"></a>
    </div>
  )
}
