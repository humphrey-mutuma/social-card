import React from 'react'
import './SocialCard.css'
import Header from './HeaderComponent/Header'
import Social from './SocialComponent/Social'
import Link from './LinkComponent/Link'
import Footer from './FooterComponent/Footer'

const SocialCard = () => {
  return (
    <div className="social">
      <Header />
      <Social />
      <Link />
      <Footer />
    </div>
  )
}

export default SocialCard;
