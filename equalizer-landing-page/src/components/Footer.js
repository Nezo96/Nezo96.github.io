import React from 'react'
import "./styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-text-wrapper'>
                    <a href='sc' className='footer-logo'>
                        <img className='logo' alt='neviem' src='equalizer.png' />
                    </a>
                    <p className='footer-text'>All rights reserved © Equalizer 2021
                        Have any problems? Contact us via social media or email us at <span className='bold'>equalizer@example.com</span></p>
                </div>
                <div className='footer-icon-wrapper'>
                    <img className='icons' alt='neviem' src='icon-facebook.svg' />
                    <img className='icons' alt='neviem' src='icon-instagram.svg' />
                    <img className='icons' alt='neviem' src='icon-twitter.svg' />
                </div>
            </div>
        </footer>
    )
}

export default Footer