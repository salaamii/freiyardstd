const Navbar = ({cartOpen, setCartOpen, cartCount}) => {
    return (
        <nav className="navbar">
           
            <h1><span>FREI</span>YARD</h1>
           
            <div className="links">
                <ul>
                    <li>BE4TS</li>
                    <li>LICEN5E5</li>
                    <li>5ERV1CE5</li>
                    <li>4BOUT</li>
                </ul>
            </div>

            <div className="cart-container-bar">
                <button onClick={() => {setCartOpen(true)}}>CART ({cartCount})</button>
            </div>

        </nav>
    )

   
}

 export default Navbar