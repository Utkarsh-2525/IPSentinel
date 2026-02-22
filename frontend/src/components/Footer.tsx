import React from "react";
import logo from "./ipsentinel_logo.jpg";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/*<div className="footer-logo">*/}
            {/*    <img src={logo} alt="IPSentinel"/>*/}
            {/*</div>*/}

            <p className="built-with" style={{ textAlign: "center", color: "rgba(251,251,251,0.97)", fontSize: "18px"}}>
                Built with

                <span className="tech" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    {/* React Icon */}
                    <svg viewBox="0 0 841.9 595.3" height="18">
                        <g fill="none" stroke="#61DAFB" strokeWidth="40">
                            <ellipse cx="420.9" cy="296.5" rx="300" ry="115"/>
                            <ellipse cx="420.9" cy="296.5" rx="300" ry="115" transform="rotate(60 420.9 296.5)"/>
                            <ellipse cx="420.9" cy="296.5" rx="300" ry="115" transform="rotate(120 420.9 296.5)"/>
                        </g>
                        <circle cx="420.9" cy="296.5" r="45" fill="#61DAFB"/>
                    </svg>
                    React
                </span>

                &

                <span className="tech" style={{ marginLeft: "10px" }}>
                    {/* Spring Boot Icon */}
                    <svg viewBox="0 0 24 24" height="18" fill="#6DB33F" style={{marginRight: "5px"}}>
                        <path d="M2 12c2-4 7-7 12-7 4 0 6 2 6 4 0 3-4 6-8 6-3 0-5-1-6-3 1 5 5 7 9 7 6 0 11-5 11-11 0-4-4-8-10-8C9 0 3 6 2 12z"/>
                    </svg>
                    Spring Boot
                </span>
            </p>

            <div className="social-icons">
                {/* GitHub */}
                <a href="https://github.com/utkarsh-2525" target="_blank" rel="noopener noreferrer">
                    <svg height="22" viewBox="0 0 16 16" fill="currentColor" color={"white"}>
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47
                                 7.59.4.07.55-.17.55-.38
                                 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94
                                 -.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                                 -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
                                 2.33.66.07-.52.28-.87.51-1.07
                                 -1.78-.2-3.64-.89-3.64-3.95
                                 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
                                 0 0 .67-.21 2.2.82.64-.18 1.32-.27
                                 2-.27s1.36.09 2 .27c1.53-1.04
                                 2.2-.82 2.2-.82.44 1.1.16
                                 1.92.08 2.12.51.56.82 1.27.82
                                 2.15 0 3.07-1.87 3.75-3.65
                                 3.95.29.25.54.73.54 1.48
                                 0 1.07-.01 1.93-.01 2.2
                                 0 .21.15.46.55.38A8.013
                                 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/m-utkarsh2573" target="_blank" rel="noopener noreferrer">
                    <svg height="22" viewBox="0 0 24 24" fill="currentColor" color={"lightblue"}>
                        <path d="M19 0h-14c-2.761
                                 0-5 2.239-5 5v14c0 2.761
                                 2.239 5 5 5h14c2.761
                                 0 5-2.239
                                 5-5v-14c0-2.761-2.239-5-5-5zm-11
                                 19h-3v-10h3v10zm-1.5-11.268c-.966
                                 0-1.75-.784-1.75-1.75s.784-1.75
                                 1.75-1.75 1.75.784
                                 1.75 1.75-.784 1.75-1.75
                                 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867
                                 0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.879v1.367h.041c.401-.761
                                 1.379-1.561 2.837-1.561 3.034
                                 0 3.596 1.996 3.596 4.591v5.603z"/>
                    </svg>
                </a>
            </div>

            <p className="copyright" style={{ textAlign: "center", color: "rgba(251,251,251,0.97)", fontSize: "18px"}}>
                © {new Date().getFullYear()} M.Utkarsh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;