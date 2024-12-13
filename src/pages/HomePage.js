import React from 'react';
import NavigationBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const HomePage = () => (
  <>
    <NavigationBar />
    <HeroSection />
    <AboutUs />
    <FeaturedProducts />
    <Footer />
  </>
);

export default HomePage;
