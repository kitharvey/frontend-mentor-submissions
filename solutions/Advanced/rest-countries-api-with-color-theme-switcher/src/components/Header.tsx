import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
    const theme = localStorage.getItem('theme')
    const [themeState, setThemeState] = useState(theme ? theme : 'Light')
    
    useEffect(() => {
        document.body.classList.add(themeState)
        if(themeState === 'Light') {
            document.body.classList.replace('Dark', 'Light')
            localStorage.setItem('theme', 'Light')
        } 
        if(themeState === 'Dark') {
            document.body.classList.replace('Light', 'Dark')
            localStorage.setItem('theme', 'Dark')
        } 
    }, [themeState])

    const handleThemeToggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(themeState === 'Light') setThemeState('Dark')
        if(themeState === 'Dark') setThemeState('Light')
    }


        return (
            <div className='header'>
                <div className="header-wrapper">
                    <h1>Where in the world?</h1>
                    <div className='theme-button' onClick={handleThemeToggle} >
                        {themeState === 'Light' && <FontAwesomeIcon icon={faSun} />}
                        {themeState === 'Dark' && <FontAwesomeIcon icon={faMoon} />}
                        <span>{themeState} Mode</span>
                    </div>
                </div>
            </div>
        );
}


export default Header