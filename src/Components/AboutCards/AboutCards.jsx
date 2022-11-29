import React, { Children } from 'react'

//styles
import './AboutCards.scss'

export default function AboutCards({ image, heading, children }) {
  return (
    <div className="mission__card">
      <img src={image} alt="Talent" />
      <div className="mission__container">
        <h1 className="mission__heading">{heading}</h1>
        {children}
      </div>
    </div>
  )
}
