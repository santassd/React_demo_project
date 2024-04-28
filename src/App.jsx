// App.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar.jsx'; // Importing the Navbar component

const App = () => {
    // Retrieve the current theme from local storage or set it to 'light' by default
    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

    // Update local storage when the theme changes
    useEffect(() => {
        localStorage.setItem('current_theme', theme);
    }, [theme]);

    return (
        <div className={`container ${theme}`}> {/* Apply the theme class dynamically */}
            <Navbar theme={theme} setTheme={setTheme} /> {/* Pass the theme state and setTheme function to the Navbar */}
        </div>
    );
}

export default App;
