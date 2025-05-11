import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row justify-content-center text-start">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>THRU MY EYES</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/page1">Moments</Link></li>
                                    <li><Link to="/page2">Reflections</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>A Personal Journey</h3>
                                <p>
                                    This website shares my real experiences with fear, anxiety, and depression —
                                    a reflection of emotional struggles and small victories. It’s a space for honesty, healing,
                                    and connection with anyone walking a similar path.
                                </p>
                            </div>
                        </div>
                        <p className="copyright">THRU MY EYES © 2025</p>
                        <p className="copyright">Created by: Jillian Guerra</p>
                        <p className="copyright">Student of SPS Online / LIVING in CHINA</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
