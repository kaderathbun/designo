import React from 'react'

//styles
import './HeroCard.scss'

export default function HeroCard({ heading, subHeading }) {
  return (
    <div className="hero__card">
      <h1 className="hero__heading">{heading}</h1>
      <p className="hero__sub-heading">{subHeading}</p>
    </div>
  )
}
