import React from 'react'

// leaflet js
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

//styles
import './LocationCards.scss'

//data
const locations = [
  {
    country: 'Canada',
    coordinates: '49.28228, -122.76104',
    office: 'Designo Central Office',
    street: '3886 Wellington Street',
    city: 'Toronto, Ontario M9C 3J5',
    phone: 'P : +1 253-863-8967',
    email: 'M : contact@designo.co',
  },
  {
    country: 'Australia',
    coordinates: '-30.329143837279947, 149.78821844232854',
    office: 'Designo AU Office',
    street: '19 Balonne Street',
    city: 'New South Wales 2443',
    phone: 'P : (02) 6720 9092',
    email: 'M : contact@designo.au',
  },
  {
    country: 'United Kingdom',
    coordinates: '53.71041183125111, -1.3418780472557361',
    office: 'Designo UK Office',
    street: '13  Colorado Way',
    city: 'Rhyd-y-fro SA8 9GA',
    phone: 'P : 078 3115 1400',
    email: 'M : contact@designo.uk',
  },
]

export default function LocationCards() {
  return (
    <div className="locations__card">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <h2>Austraila</h2>
      <address className="locations__location-container">
        <span className="locations__bold">Designo Centeral Office</span>
        <span>3886 Wellington Street</span>
        <span>Toronto, Ontario M9C 3J5</span>
      </address>
      <address className="locations__contact-container">
        <span className="locations__bold">Contact Us (Centeral Office)</span>
        <a href="tel:+1253-863-8967">P: +1 253-863-8967</a>
        <a href="mailto: contact@designo.co">contact@designo.co</a>
      </address>
    </div>
  )
}

// <div className="locations__card">
//   <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={[51.505, -0.09]}>
//       <Popup>{location.street}</Popup>
//     </Marker>
//   </MapContainer>
//   <h2>{location.country}</h2>
//   <address className="locations__location-container">
//     <span className="locations__bold">{location.office}</span>
//     <span>{location.street}</span>
//     <span>{location.city}</span>
//   </address>
//   <address className="locations__contact-container">
//     <span className="locations__bold">Contact</span>
//     <a href="tel:+1253-863-8967">{location.phone}</a>
//     <a href="mailto: contact@designo.co">{location.email}</a>
//   </address>
// </div>
