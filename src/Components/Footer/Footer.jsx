import React from 'react'
import { Link } from 'react-router-dom'

//styles
import './Footer.scss'
import logo from '../../assets/shared/desktop/logo-light.png'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__card">
        <h3 className="footer__heading">Let’s talk about your project</h3>
        <p className="footer__sub-heading">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <a href="#" className="footer__cta">
          Get in Touch
        </a>
      </div>
      <div className="footer__info-container">
        <img src={logo} alt="" className="footer__logo" />
        <ul className="footer__nav">
          <Link>Our Company</Link>
          <Link>Locations</Link>
          <Link>Contact</Link>
        </ul>
        <address className="footer__location-container">
          <span className="footer__bold">Designo Centeral Office</span>
          <span>3886 Wellington Street</span>
          <span>Toronto, Ontario M9C 3J5</span>
        </address>
        <address className="footer__contact-container">
          <span className="footer__bold">Contact Us (Centeral Office)</span>
          <a href="tel:+1253-863-8967">P: +1 253-863-8967</a>
          <a href="mailto: contact@designo.co">contact@designo.co</a>
        </address>
        <div className="footer__social-nav">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={pinterest} alt="pinterest" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}
