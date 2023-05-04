import React from 'react';
import { BsSun } from "react-icons/bs";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button 
                className='btn toggle'
                onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>
                <BsSun/>
            </button>
        </div>
    );
}

export default Header;