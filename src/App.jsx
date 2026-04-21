import { useState, useEffect } from 'react'
import Navbar from './navbar'
import Hero from './Hero';
import BeatsPage from './beats';
import License from './Licenses';
import Footer from './footer';
import PlayerBar from './playerbar';
import Cart from './cart';


function App() {

  const [currentBeat, setCurrentBeat] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

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
          <BeatsPage onSelectBeat={handleSelectBeat}/>
          <License/>
          <Footer/>
          <PlayerBar currentBeat={currentBeat} isPlaying={isPlaying} setIsPlaying={setIsPlaying} handleSelectBeat={handleSelectBeat}/>
       </div>
    </>
  )
}

export default App



