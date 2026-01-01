import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    {children}
  </div>
);

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Container>
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
      </Container>
      <Footer />
    </div>
  )
}

export default Home