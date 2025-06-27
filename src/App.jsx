import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';

function App() {
  return (
    <div className='min-h-screen '>
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
