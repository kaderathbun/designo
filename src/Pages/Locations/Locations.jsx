import React from 'react'

//styles
import './Locations.scss'

// components
import LocationCards from '../../Components/LocationCards/LocationCards'
import Footer from '../../Components/Footer/Footer'

export default function Locations() {
  return (
    <React.Fragment>
      <main className="map">
        <LocationCards />
      </main>
      <Footer isSecondary={false} />
    </React.Fragment>
  )
}
