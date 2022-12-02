import React from 'react'
import { useMediaQuery } from 'react-responsive'

//styles
import './HeroCard.scss'
import backgroundMobile from '../../assets/home/desktop/bg-pattern-hero-home.svg'
import backgroundDesktop from '../../assets/shared/desktop/bg-pattern-call-to-action.svg'

export default function HeroCard({ heading, subHeading, isSecondary }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })

  const stylesMobile = {
    height: isSecondary ? '395px' : '320px',
    backgroundImage: 'url(' + backgroundMobile + ')',
    backgroundSize: isSecondary ? '70%' : 'contain',
    backgroundPosition: isSecondary ? 'top -110px right' : 'top right',
    backgroundRepeat: isSecondary ? 'initial' : 'no-repeat',
    backgroundRepeatY: isSecondary ? 'no-repeat' : 'initial',
  }
  const stylesTablet = {
    height: isSecondary ? '395px' : '252px',
    backgroundImage: 'url(' + backgroundDesktop + ')',
    backgroundSize: isSecondary ? '70%' : 'auto',
    backgroundPosition: isSecondary ? 'top -110px right' : 'center',
    backgroundRepeatY: isSecondary ? 'no-repeat' : 'initial',
  }
  const stylesDesktop = {
    height: isSecondary ? '395px' : '320px',
    backgroundImage: 'url(' + backgroundDesktop + ')',
    backgroundSize: isSecondary ? '70%' : 'contain',
    backgroundPosition: isSecondary ? 'top -110px right' : 'top right',
    backgroundRepeatY: isSecondary ? 'no-repeat' : 'initial',
  }

  if (isMobile) {
    return (
      <div className="hero__card" style={stylesMobile}>
        <h1 className="hero__heading">{heading}</h1>
        <p className="hero__sub-heading">{subHeading}</p>
      </div>
    )
  } else if (isTablet) {
    return (
      <div className="hero__card" style={stylesTablet}>
        <h1 className="hero__heading">{heading}</h1>
        <p className="hero__sub-heading">{subHeading}</p>
      </div>
    )
  } else if (isDesktop) {
    return (
      <div className="hero__card" style={stylesDesktop}>
        <h1 className="hero__heading">{heading}</h1>
        <p className="hero__sub-heading">{subHeading}</p>
      </div>
    )
  }
}
