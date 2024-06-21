import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/inc/Navbar'; 
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Footer from './Components/inc/footer';

function App() {
  return (
    <Router>
      
     <div>

     <Navbar />

     <Routes> <Route path="/" element={<Home />} />  </Routes>

     <Routes> <Route path="/About" element={<About />} />  </Routes>

     <Routes> <Route path="/Contact" element={<Contact />} />  </Routes>

     </div>

     <Footer/>
    
    </Router>

   );
}

export default App;
