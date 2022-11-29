import React from 'react'

//styles
import './About.scss'
import hero from '../../assets/about/mobile/image-about-hero.jpg'
import talent from '../../assets/about/mobile/image-world-class-talent.jpg'
import realDeal from '../../assets/about/mobile/image-real-deal.jpg'
import canada from '../../assets/shared/desktop/illustration-canada.svg'
import australia from '../../assets/shared/desktop/illustration-australia.svg'
import uk from '../../assets/shared/desktop/illustration-united-kingdom.svg'

//components
import HeroCard from '../../Components/HeroCard/HeroCard'
import AboutCards from '../../Components/AboutCards/AboutCards'
import Footer from '../../Components/Footer/Footer'

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

export default function About() {
  return (
    <React.Fragment>
      <main className="about">
        <section className="hero">
          <img src={hero} alt="Team meeting" />
          <HeroCard
            heading="About Us"
            subHeading="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
            isSecondary={true}
          />
        </section>
        <section className="mission">
          <AboutCards image={talent} heading="World-class talent">
            <p className="mission__sub-heading">
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
        </section>
        <section className="mission">
          <AboutCards image={realDeal} heading="The real deal">
            <p className="mission__sub-heading">
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
