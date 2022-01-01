import React from 'react'
import './Header.css'
import punkLogo from '../Assests/header/cryptopunk-logo.png'
import searchIcon from '../Assests/header/search.png'
import themeSwitch from '../Assests/header/theme-switch.png'

const Header = () => {
    return <div className='header'> 
        <div className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt='' />
        </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon} alt='' /> 

            </div>
            
                <input 
                className='searchInput' 
                placeholder='collection, item or user ...' 
                />
        </div>

        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className='headerActions'>
            <div className='themeSwitchContainer'>
                <img src={themeSwitch} alt='' />
            </div>
        </div>

        <div className='loginButton'>GET IN</div>
    </div>

}

export default Header
