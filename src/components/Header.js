import React from 'react';
import { FaMoon } from "react-icons/fa";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>My Notes</h1>
            <button 
                className='btn toggle'
                onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>
                <FaMoon/>
            </button>
        </div>
    );
}

export default Header;