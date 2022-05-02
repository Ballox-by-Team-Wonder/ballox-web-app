import React from 'react'
import './header.styles.css'
import balloxLogo from '../../assets/icons/balloxLogo.png'
import Button from '../button/button.component'

function Header() {

    return (
        <div className="header">
            <img src={balloxLogo} alt="" className="header__logo" />
            <div className="header__center">
                <span className="header__center-link">Create Election</span>
                <span className="header__center-link">Results</span>
            </div>

            <div className="header__right">
                <Button clear>Login</Button>
                <Button>Sign up</Button>
            </div>
        </div>
    )
}

export default Header