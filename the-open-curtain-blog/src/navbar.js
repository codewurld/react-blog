import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Open Curtain Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* adding styles  */}
                <Link to="/about">About</Link>
                <Link to="/newpost" style={{
                    color: "white",
                    backgroundColor: "#E3170A",
                    borderRadius: "10px"
                }}>New Entry</Link>
            </div>
        </nav>
    );
}

export default Navbar;