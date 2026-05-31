import React from 'react'
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