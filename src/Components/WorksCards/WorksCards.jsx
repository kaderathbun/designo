import React from 'react'

//styles
import './WorksCards.scss'

export default function WorksCards({ image, heading, subHeading }) {
  return (
    <div className="works__card">
      <img className='works__image' src={image} alt={heading} />
      <div className="works__container">
        <h1 className="works__heading">{heading}</h1>
        <p className="works__sub-heading">{subHeading}</p>
      </div>
    </div>
  )
}
