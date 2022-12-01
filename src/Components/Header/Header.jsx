import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//styles
import './Header.scss'
import logo from '../../assets/shared/desktop/logo-dark.png'
import navHamburgerIcon from '../../assets/shared/mobile/icon-hamburger.svg'
import navCloseIcon from '../../assets/shared/mobile/icon-close.svg'

export default function Header() {
  //mobile logic
  const [isOpen, setIsOpen] = useState(false)

  //disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logo} alt="Designo" className="header__logo" />
        </Link>
        <img
          src={isOpen ? navCloseIcon : navHamburgerIcon}
          alt=""
          className="header__hamburger-icon"
          onClick={handleClick}
        />
      </div>
      <ul
        className={
          isOpen ? 'header__menu header__menu--active' : 'header__menu'
        }
      >
        <Link to="/about" className="header__link">
          Our Company
        </Link>
        <Link to="/locations" className="header__link">
          Locations
        </Link>
        <Link to="/contact" className="header__link">
          Contact
        </Link>
      </ul>
    </nav>
  )
}
