import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./ipsentinel_logo.jpg";

const Navbar: React.FC = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkStyle = (path: string) => ({
        color: location.pathname === path ? "#3b82f6" : "#ffffff",
        textDecoration: "none",
        fontWeight: 500
    });

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="IPSentinel Logo" className="logo-img" />
                <span>IPSentinel</span>
            </div>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Link to="/" style={navLinkStyle("/")}>
                    Home
                </Link>

                <Link to="/bulk" style={navLinkStyle("/bulk")}>
                    Bulk Scan
                </Link>
            </div>

            <div
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>
        </nav>
    );
};

export default Navbar;