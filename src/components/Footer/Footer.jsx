import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>

            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>© 2025 Bookify.com. All Rights Reserved.</p>
                </div>
                <div className="footer-bottom-right">
                    <a href="#">Contact Us</a>
                    <a href="#">Help Us To Improve</a>
                    <a href="#">About Us</a>
                </div>
            </div>

        </footer>
    );
}

