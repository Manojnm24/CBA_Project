import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { Link,useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import ThemeProvider, { useTheme } from "../../context/ThemeContext";


const Navbar = ({ setShowLogin }) => {
  const{theme, toggleTheme} = useTheme();
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount, token, logout } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='logo' className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* 🌙 Theme Toggle Button */}
  <button className="theme-toggle-btn" onClick={toggleTheme}>
    {theme === "light" ? "🌙" : "☀️"}
  </button>

        {!token ?<button onClick={() => setShowLogin(true)}>Sign in</button>
         :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={handleLogout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar;
