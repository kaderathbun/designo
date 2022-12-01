import React from 'react'
import { Link } from 'react-router-dom'

//styles
import './ProjectCards.scss'

export default function ProjectsCards({ heading, background, href }) {
  return (
    <div key={heading} className="projects__card">
      <img className="projects__background" src={background} alt={heading} />
      <div className="projects__wrapper">
        <h2 className="projects__heading">{heading}</h2>
        <p className="projects__sub-heading">View Projects</p>
      </div>
      <Link to={href} className="projects__overlay" />
    </div>
  )
}
