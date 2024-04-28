// navbar.jsx
import React from 'react';
import './navbar.css'; // Importing the CSS file for styling
import logo_light from '../../assets/logo-black.png'; // Importing the light mode logo image
import logo_dark from '../../assets/logo-white.png'; // Importing the dark mode logo image
import search_icon_light from '../../assets/search-w.png'; // Importing the light mode search icon image
import search_icon_dark from '../../assets/search-b.png'; // Importing the dark mode search icon image
import toogle_light from '../../assets/night.png'; // Importing the light mode toggle icon image
import toogle_dark from '../../assets/day.png'; // Importing the dark mode toggle icon image

const Navbar = ({ theme, setTheme }) => {
    // Function to toggle between light and dark modes
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <div className='navbar'>
            {/* Render the logo image based on the theme */}
            <img src={theme === 'light' ? logo_light : logo_dark} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>
            <div className='search-box'>
                {/* Render the search icon image based on the theme */}
                <input type="text" placeholder='Search' />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="" />
            </div>
            {/* Render the toggle icon image based on the theme */}
            <img onClick={() => { toggle_mode() }} src={theme === 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon' />
        </div>
    );
}

export default Navbar;
