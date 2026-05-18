import React, { use } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    {children}
  </div>
);

const Home = () => {
  useGetAllJobs();
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