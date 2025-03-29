import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Ourservices from '../components/Ourservices'
import Platform from '../components/Platform'
import Review from '../components/Review'
import Get from '../components/Get'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
              <Navbar />
              <Body />
              <Ourservices />
              <Platform />
              <Review />
              <Get/>
            <Footer />
        </>
   
  )
}

export default Home
