import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero';
import BeatsPage from './components/beats';
import License from './components/Licenses';
import Footer from './components/footer';
import PlayerBar from './components/playerbar';
import Cart from './components/cart';
import LicenseModal from './components/licenseModal';


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

  const handleAddCart = (beat, license)=> {
    const alreadyInCart = cart.some(item => item.beat.id == beat.id);

    if (alreadyInCart) return;
    setCart (prev => [...prev, {beat, license}]);
  }

  const removeFromCart = (beat)=> {
    const removeItem = cart.filter(item=> item.beat.id !== beat.id);
    setCart(removeItem);
  }
 
  return (
    <>
      <div className={`App ${currentBeat ? 'player-active' : ''}`}>
          <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} cartCount={cart.length}/>
          <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} cart={cart} removeFromCart={removeFromCart}/>
          <Hero/> 
          <BeatsPage onSelectBeat={handleSelectBeat} setPendingBeat={setPendingBeat}/>
          <LicenseModal pendingBeat={pendingBeat} setPendingBeat={setPendingBeat} handleAddCart={handleAddCart} cart={cart}/>
          <License/>
          <Footer/>
          <PlayerBar currentBeat={currentBeat} isPlaying={isPlaying} setIsPlaying={setIsPlaying} handleSelectBeat={handleSelectBeat} setPendingBeat={setPendingBeat}/>
       </div>
    </>
  )
}

export default App



