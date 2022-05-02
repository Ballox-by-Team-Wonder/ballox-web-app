import React from 'react'
import './header.styles.css'
import balloxLogo from '../../assets/icons/balloxLogo.png'
import { Button } from '../button/button.component'
import { Link } from 'react-router-dom'

export function Header() {

    return (
        <div className="header">
            <Link to="/">
                <img src={balloxLogo} alt="" className="header__logo" />
            </Link>
            <div className="header__center">
                <Link to="/create-election">
                    <span className="header__center-link">Create Election</span>
                </Link>
                <Link to="/results">
                    <span className="header__center-link">Results</span>
                </Link>
            </div>

            <div className="header__right">
                <Button clear>Login</Button>
                <Button>Sign up</Button>
            </div>
        </div>
    )
}
