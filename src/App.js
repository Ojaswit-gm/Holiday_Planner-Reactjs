import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Hero from './Hero';
import Activity from './Activity';
import Booking from './Booking';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Hero />
      <Activity />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
