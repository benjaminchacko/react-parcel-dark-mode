import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'
import useWindowSize from '../assets/custom-hooks/useWindowSize';

import '../assets/css/main.css'
import '../assets/css/toggle.css'
import '../assets/css/dark-theme.css'
import '../assets/css/light-theme.css'


const DarkMode = () => {
    useWindowSize();
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
          Chocolate lollipop halvah fruitcake toffee bonbon oat cake soufflé jelly-o. Chupa chups macaroon chocolate cake marzipan carrot cake chocolate bar toffee toffee jelly-o. Carrot cake soufflé bear claw ice cream ice cream toffee gummi bears sweet roll. Chocolate bar caramels topping lollipop macaroon chocolate bar. Pudding tart oat cake jelly-o chupa chups candy bonbon tart sweet roll. Cheesecake chocolate liquorice soufflé sweet chocolate bar. Marzipan sugar plum wafer brownie cupcake chocolate bar caramels cotton candy. Chocolate bar cupcake chupa chups candy cake. Jelly-o gummies croissant marshmallow. Icing lollipop tootsie roll biscuit donut sweet apple pie fruitcake. Bonbon wafer chupa chups sweet roll toffee chupa chups lemon drops danish chocolate cake. Pastry danish donut pudding apple pie tart chocolate cake macaroon gummi bears.
          </p>
        </div>
      </div>
      )
  };

export default DarkMode;

