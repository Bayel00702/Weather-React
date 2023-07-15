import React from 'react';

//media
import Logo from './Logo.svg'
import Cap from './Cap.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__title">
                        <img src={Logo} alt="Logo"/>
                        React weather
                    </h1>

                    <div className="header__right">
                        <div>
                            <img src={Cap} alt="Drop"/>

                        </div>
                        <input className="header__right-input" type="search" placeholder="Поиск города"/>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;