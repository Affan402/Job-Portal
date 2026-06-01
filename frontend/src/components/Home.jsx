import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    {children}
  </div>
);

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
   
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