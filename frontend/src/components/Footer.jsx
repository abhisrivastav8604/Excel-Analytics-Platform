import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img
                        src="/images/visualyze-logo.png"
                        alt="VisuaLyze Logo"
                        className="footer-logo-img"
                        height={40}
                        style={{ verticalAlign: "middle", marginRight: "10px" }}
                    />
                    <span className="footer-logo-text">Excel Analytics Platform</span>
                </div>
                <div className="footer-contact">
                    <p>
                        <MdEmail className="footer-contact-icon" />
                        Email: <a href="mailto:support@excelanalytics.com">support@excelanalytics.com</a>
                    </p>
                    <p>
                        <MdCall className="footer-contact-icon" />
                        Phone: <a href="tel:+918604738439">+91 8604738439</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <span role="img" aria-label="sparkle">✨</span>
                &nbsp;© {new Date().getFullYear()} <b>Excel Analytics Platform</b>. All rights reserved.   
            </div>
        </footer>
    );
}

export default Footer;
