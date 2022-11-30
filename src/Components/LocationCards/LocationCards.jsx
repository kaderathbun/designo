import React from 'react'

//styles
import './LocationCards.scss'
import canada from '../../assets/shared/desktop/illustration-canada.svg'
import australia from '../../assets/shared/desktop/illustration-australia.svg'
import uk from '../../assets/shared/desktop/illustration-united-kingdom.svg'

//data
const locations = [
  {
    country: 'Canada',
    image: canada,
  },
  {
    country: 'Australia',
    image: australia,
  },
  {
    country: 'Uniited Kingdom',
    image: uk,
  },
]

export default function LocationCards() {
  return (
    <React.Fragment>
      {locations.map((location, idx) => {
        return (
          <div key={idx} className="locations__card">
            <img
              className="locations__image"
              src={location.image}
              alt={location.country}
            />
            <h2 className="locations__heading">{location.country}</h2>
            <a className="locations__cta" href="#">
              See Location
            </a>
          </div>
        )
      })}
    </React.Fragment>
  )
}
