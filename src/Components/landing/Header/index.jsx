import React from 'react'
import logo from "../../../assest/logomain.png";
import iconSearch from "../../../assest/icon-search.svg";
import "./style.css";

const Header = () => {
  return (
    <header id='#home'>
      <div className="links">

        <img src={logo} alt="logo" />
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#special">Special</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#blogs">Blogs</a></li>
          {/* <li><img src={iconSearch} alt="icon search" /></li> */}
        </ul>
      </div>
      <div className="btn">
        <button>PeanutButter</button>
      </div>
    </header>
  )
}

export default Header;