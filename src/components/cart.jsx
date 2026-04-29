

const Cart = ({cartOpen, setCartOpen, cart, removeFromCart}) => {

    if (!cartOpen) return null;

    return (

     <>
        <div className="opacity-effect" onClick={() => {setCartOpen(false)}}></div>
            <div className="cart-container">
                <div className="close-cart"><i className="fa-solid fa-xmark fa-2xl" onClick={() => {setCartOpen(false)}}></i></div>
                <div className="items-container">
                   {cart.map((item)=> {

                      return (
                        <div className="item" key={item.beat.id}>
                            <div className="beat-meta">
                                <h3>{item.beat.name}</h3>
                                <div className="more-de">
                                  <p>{item.beat.genre}</p>
                                 <p>{item.beat.bpm}BPM</p>
                             </div>
                             </div>
                            <div className="price-license">
                              <p>{item.license.price}</p>
                              <p>{item.license.title}</p>
                            </div>

                            <div className="remove-item" onClick={()=> {removeFromCart(item.beat)}}>
                                <i className="fa-solid fa-xmark fa-2xl"></i>
                            </div>
                        </div>
                        )
                    })}
                    

                    
                </div>

                <div className="checkout">
                    <p></p>
                        <button>Checkout</button>
                </div>
            </div>
    </>         
    )
}

export default Cart