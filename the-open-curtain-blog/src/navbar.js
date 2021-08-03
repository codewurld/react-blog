import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Open Curtain Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* adding styles  */}
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#E3170A",
                    borderRadius: "8px"
                }}>New Entry</a>
            </div>
        </nav>
    );
}

export default Navbar;