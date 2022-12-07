import React from 'react'
import { useMediaQuery } from 'react-responsive'

//styles
import './About.scss'
import heroMobile from '../../assets/about/mobile/image-about-hero.jpg'
import heroTablet from '../../assets/about/tablet/image-about-hero.jpg'
import talentMobile from '../../assets/about/mobile/image-world-class-talent.jpg'
import talentTablet from '../../assets/about/tablet/image-world-class-talent.jpg'
import realDealMobile from '../../assets/about/mobile/image-real-deal.jpg'
import realDealTablet from '../../assets/about/tablet/image-real-deal.jpg'

//components
import AboutCards from '../../Components/AboutCards/AboutCards'
import Footer from '../../Components/Footer/Footer'
import LocationCards from '../../Components/LocationCards/LocationCards'

export default function About() {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <React.Fragment>
      <main className="about">
        <section className="mission">
          <AboutCards
            image={isTablet ? heroTablet : heroMobile}
            heading="About Us"
            isSecondary={false}
          >
            <p className="mission__sub-heading">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </AboutCards>
        </section>
        <section className="mission">
          <AboutCards
            image={isTablet ? talentTablet : talentMobile}
            heading="World-class talent"
            isSecondary={true}
          >
            <p className="mission__sub-heading" style={{ color: '#333136' }}>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms. <br /> <br /> Our team is
              multi-disciplinary and we are not merely interested in form —
              content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </AboutCards>
        </section>
        <section className="locations">
          <LocationCards />
        </section>
        <section className="mission">
          <AboutCards
            image={isTablet ? realDealTablet : realDealMobile}
            heading="The real deal"
            isSecondary={true}
          >
            <p className="mission__sub-heading" style={{ color: '#333136' }}>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success. <br />{' '}
              <br /> We are visual storytellers in appealing and captivating
              ways. By combining business and marketing strategies, we inspire
              audiences to take action and drive real results.
            </p>
          </AboutCards>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}
