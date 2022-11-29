import React from 'react'

//leaflet js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

//styles
import './LocationCards.scss'

//data
const locations = [
  {
    country: 'Canada',
    lat: 43.644190986027894,
    long: -79.39455012883572,
    office: 'Designo Central Office',
    street: '3886 Wellington Street',
    city: 'Toronto, Ontario M9C 3J5',
    phone: 'P : +1 253-863-8967',
    email: 'M : contact@designo.co',
  },
  {
    country: 'Australia',
    lat: -30.329143837279947,
    long: 149.78821844232854,
    office: 'Designo AU Office',
    street: '19 Balonne Street',
    city: 'New South Wales 2443',
    phone: 'P : (02) 6720 9092',
    email: 'M : contact@designo.au',
  },
  {
    country: 'United Kingdom',
    lat: 53.71041183125111,
    long: -1.3418780472557361,
    office: 'Designo UK Office',
    street: '13  Colorado Way',
    city: 'Rhyd-y-fro SA8 9GA',
    phone: 'P : 078 3115 1400',
    email: 'M : contact@designo.uk',
  },
]

export default function LocationCards() {
  return locations.map((location) => {
    return (
      <React.Fragment key={location.lat}>
        <div className="locations__card">
          <MapContainer
            center={[location.lat, location.long]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.long]}>
              <Popup>
                <strong>{location.office}</strong>
                <br />
                {location.street}
                <br />
                {location.city}
              </Popup>
            </Marker>
          </MapContainer>
          <h2>{location.country}</h2>
          <address className="locations__location-container">
            <span className="locations__bold">{location.office}</span>
            <span>{location.street}</span>
            <span>{location.city}</span>
          </address>
          <address className="locations__contact-container">
            <span className="locations__bold">Contact Us</span>
            <a href="tel:+1253-863-8967">{location.phone}</a>
            <a href="mailto: contact@designo.co">{location.email}</a>
          </address>
        </div>
      </React.Fragment>
    )
  })
}
