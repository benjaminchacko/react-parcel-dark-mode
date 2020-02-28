import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'
import '../assets/main.css'

const DarkMode = () => {
    const [darkTheme, setDarkTheme] = useState(getDefaultTheme())

    useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(darkTheme))
    }, [darkTheme])

    function getDefaultTheme(){
      const selectedTheme = JSON.parse(localStorage.getItem('dark'))
      return selectedTheme || false
    }

    return (
      <div className={darkTheme ? 'dark-theme': 'light-theme'}>
        <nav>
        <div className="button-container">
				<Toggle
            defaultChecked={darkTheme}
            icons={false}
            onChange={() => setDarkTheme(prevTheme => !prevTheme)}/>
          </div>
        </nav>
        <div className="content">
          <h1>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h1>
          <p>
            Do take a note of the <code>color</code> property in the nav bar.
          </p>
        </div>
      </div>
      )
  };

export default DarkMode;

