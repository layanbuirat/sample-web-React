// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(190, 205, 210)' }}>
            <a className="navbar-brand" href="#">START BOOTSTRAP</a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" style={{ display: 'flex', gap: '5px' }}>
                    <li className="nav-item">
                        <a className="nav-link" href="#">portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
