import React from 'react';
import Navbar from '@/Components/Navbar/Navbar';
import Banner from '@/Components/Banner/Banner';
import About from '@/Components/About/About';
import Tcarousel from '@/Components/TeamCarousel/Tcarousel';
import Sponser from "@/Components/Sponser/sponser";
import Contact from "@/Components/Contact/contact"
import Footer from "@/Components/Footer/Footer";
import TracksCard from '@/Components/Tracks/TracksCard';
import Counts from '@/Components/Count/Counts';



const index = () => {

  return (

    <div >
      {/* Navbar */}
      <Navbar />

      {/* banner section */}
      <Banner />

      {/*  About section   */}
      <About />
      <Counts/>
      {/*Sponser */}
      <Sponser />

      {/* team carousel */}
      <Tcarousel />

      {/* tracks */}
      <TracksCard/>
      
      {/* Contacts section */}
      <Contact />

      {/* Footer section */}
      <Footer />
    </div>
  )
}

export default index

