import React from 'react'
import CustomNavbar from '../../components/HeroSection'
import TwoColumnContainer from '../../components/Body'
import Footer from '../../components/Footer'
import FormFrontend from '../../components/form'
const Home = () => {
  return (
    <>
      <CustomNavbar/>
      <TwoColumnContainer/>
      <FormFrontend/>
      <Footer/>
    </>
  )
}

export default Home
