import { useState, useEffect } from 'react'
import Navbar from './navbar'
import Hero from './Hero';
import BeatsPage from './beats';
import License from './Licenses';
import Footer from './footer';
import PlayerBar from './playerbar';
import Cart from './cart';
import LicenseModal from './licenseModal';


function App() {

  const [currentBeat, setCurrentBeat] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [pendingBeat, setPendingBeat] = useState(null);
  

  const handleSelectBeat = (beat) => {
    setCurrentBeat(beat);
    setIsPlaying(true);
  }
 
  return (
    <>
      <div className="App">
          <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} cartCount={cart.length}/>
          <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} cart={cart}/>
          <Hero/> 
          <BeatsPage onSelectBeat={handleSelectBeat} setPendingBeat={setPendingBeat}/>
          <LicenseModal pendingBeat={pendingBeat} setPendingBeat={setPendingBeat}/>
          <License/>
          <Footer/>
          <PlayerBar currentBeat={currentBeat} isPlaying={isPlaying} setIsPlaying={setIsPlaying} handleSelectBeat={handleSelectBeat} setPendingBeat={setPendingBeat}/>
       </div>
    </>
  )
}

export default App



