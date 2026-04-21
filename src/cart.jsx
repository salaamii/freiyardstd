

const Cart = ({cartOpen, setCartOpen, cart}) => {

    if (!cartOpen) return null;

    return (

     <>
        <div className="opacity-effect" onClick={() => {setCartOpen(false)}}></div>
            <div className="cart-container">
                <div className="close-cart"><i className="fa-solid fa-xmark fa-2xl" onClick={() => {setCartOpen(false)}}></i></div>
                <div className="items-container">
                    <div className="item">
                        <div className="beat-meta">
                            <h3>Timeline Grief</h3>
                            <div className="more-de">
                                <p>AFROBEATS</p>
                                <p>140BPM</p>
                            </div>
                        </div>
                        <div className="price-license">
                            <p>150,000</p>
                            <p>EXCLUSIVE</p>
                        </div>

                        <div className="remove-item">
                            <i className="fa-solid fa-xmark fa-2xl"></i>
                        </div>
                    </div>

                    
                </div>

                <div className="checkout">
                    <p>Total: NGN 150,000</p>
                        <button>CHECKOUT</button>
                </div>
            </div>
    </>         
    )
}

export default Cart