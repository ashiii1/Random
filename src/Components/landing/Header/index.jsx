import React,{useContext} from 'react'
import logo from "../../../assest/logomain.png";
import iconSearch from "../../../assest/icon-search.svg";
import { CartContext } from '../../../Context/CartContext';
import "./style.css";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
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
        <button>Home Delivery</button>
        <div className="cart-icon">🛒 {itemCount}</div>
      </div>
      <div className="btn">
        <button>Home Delivery</button>
      </div>
    </header>
  )
}

export default Header;