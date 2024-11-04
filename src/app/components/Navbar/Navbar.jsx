import React from 'react'
import './navbar.css'
import Link from 'next/link'
function Navbar() {
  return (
    <div>
      <nav className="navbar">
         
            <div className="logo">Scentora</div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Brands</a></li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Search for products..."/>
                <span className="search-icon"><img src="/assets/icons/search-icon.png" alt=""/></span>
            </div>
            <div className="icons">
                <div className="icon wishlist">
                    <span><img src="/assets/icons/Vector.png" alt=""/></span>
                    <span className="badge">2</span>
                </div>
              <Link href={'/cart'}>
                    <div className="icon cart">
                        <span><img src="/assets/icons/Cart1.png" alt=""/></span>
                        <span className="badge">4</span>
                    </div>
                    </Link>
                <div className="icon profile">
                    <span><img src="/assets/icons/person.png" alt=""/></span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
