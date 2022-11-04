import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Contactpage from './pages/Contactpage';
import Linkpage from './pages/Linkpage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Linkpage/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
