import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Danish Khan</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

           <div className="footer__social">
           <a href="https://www.instagram.com/_ig_danish_7/" 
        className="footer__social-link" target="_blank">
            <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://www.linkedin.com/in/danish-khan-569489131/" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/danish-2" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
        </a>
            </div>

            <span className='footer__copy'>
                &#169; Danish Khan. All rights reserved
            </span> 
        </div>
    </footer>
  )
}
