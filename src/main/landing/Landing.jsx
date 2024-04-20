import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Hero from "../../components/hero/Hero"
import Companies from "../../components/companies/Companies"
import Pricing from "../../components/pricing/Pricing"
import Earnings from "../../components/earnings/Earnings"
import Status from "../../components/status/Status"
import Subscribe from "../../components/subscribe/Subscribe"
import Footer from "../../components/footer/Footer"


const Landing = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Pricing/>
      <Earnings/>
      <Status/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Landing