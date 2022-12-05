import React from 'react'

//styles
import './AboutCards.scss'

export default function AboutCards({ image, heading, children, isSecondary }) {
  const mobileSecondaryStyles = {
    backgroundColor: isSecondary ? '#fdf3f0' : '#e7816b',
    backgroundPosition: isSecondary ? 'left center' : 'top -150px right 0px',
    backgroundRepeat: isSecondary ? 'repeat' : 'no-repeat',
    backgroundSize: isSecondary ? '100%' : '80%',
    marginBottom: isSecondary ? '150px' : '',
  }

  return (
    <div className="mission__card">
      <img src={image} alt="Talent" />
      <div className="mission__container" style={mobileSecondaryStyles}>
        <h1
          className="mission__heading"
          style={{ color: isSecondary ? '#e7816b' : '#fff' }}
        >
          {heading}
        </h1>
        {children}
      </div>
    </div>
  )
}
