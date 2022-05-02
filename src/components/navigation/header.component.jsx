import React from 'react'
import './header.styles.css'
import balloxLogo from '../../assets/icons/balloxLogo.png'
import { Button } from '../button/button.component'
import { Link, useLocation } from 'react-router-dom'
import { Sidebar } from './sidebar.component'

export function Header() {
    const { pathname } = useLocation()

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
                {/* <Button clear>Login</Button> */}
                
                <a href="https://ballox-by-team-wonder.github.io/Ballox-Web/" target="_blank">
                    <Button>Sign out</Button>
                </a>
            </div>
            <Sidebar pathname={pathname} />
        </div>
    )
}
