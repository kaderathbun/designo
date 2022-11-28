import React from 'react'

//styles
import './HeroCard.scss'

export default function HeroCard({ heading, subHeading, isSecondary }) {
  return (
    <div
      className="hero__card"
      style={{
        height: isSecondary ? '395px' : '320px',
        backgroundSize: isSecondary ? '70%' : 'contain',
        backgroundPosition: isSecondary ? 'top -110px right' : 'top right',
        backgroundRepeat: isSecondary ? 'initial' : 'no-repeat',
        backgroundRepeatY: isSecondary ? 'no-repeat' : 'initial',
      }}
    >
      <h1 className="hero__heading">{heading}</h1>
      <p className="hero__sub-heading">{subHeading}</p>
    </div>
  )
}
