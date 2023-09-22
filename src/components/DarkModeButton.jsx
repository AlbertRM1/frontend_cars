import React from 'react';

const DarkModeButton = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    };

  return (
    <label className='dark_mode'>
        <input className='dark_mode_input' type="checkbox" id='darkmode_toggle' onChange={toggleTheme} />
        <span className='slider'></span>
    </label>
  );
};

export default DarkModeButton;