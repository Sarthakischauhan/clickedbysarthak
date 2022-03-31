import React from "react";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <h1 className="logo">clickedby<span id="name">Sarthak</span></h1>
                <ul className="links">
                    <li className="link">
                        <a href="/about" id="about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;