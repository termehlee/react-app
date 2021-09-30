import React, { useState } from "react"
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
    const [navs] = useState([
        {link: '/', value: 'Home', id:1},
        {link: '/cart', value: 'Shopping Cart', id:3},
        {link: '/register', value: 'Register', id:2},
        {link: '/login', value: 'Login', id:3},
        {link: '/cart', value: 'Cart', id:3},
    ])
    return ( 
        <div className="navbar">
        <nav>
            <ul className="links">
                {navs.map((nav) => (
                    
                    <li key={nav.id}>
                        <BrowserRouter>
                            <Link to={nav.link}>{nav.value}</Link>
                        </BrowserRouter>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
     );
}
 
export default Navbar;