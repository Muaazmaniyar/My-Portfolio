import React from 'react';
import './App.css';
import Navbar from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Qualification from './Components/Qualification';
import Contact from './Components/Contact'; 
import Footer from './Components/Footer';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
