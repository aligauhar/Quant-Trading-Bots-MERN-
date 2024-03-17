import React, {useContext} from 'react'
import CustomNavbar from '../../components/HeroSection'
import Component5 from '../../components/comp-five'
import Footer from '../../components/Footer'
import { ThemeContext  } from "../../Theme";

const Home = () => {
  const { gradiant} = useContext(ThemeContext );
  return (
    <>
<div
 style={{ 
  backgroundColor: `#4158D0`,
  backgroundImage: gradiant,
  backgroundSize: 'cover',
}}
>
      <CustomNavbar/>
      <Component5/>
      <Footer/>
      </div>
    </>
  )
}

export default Home

