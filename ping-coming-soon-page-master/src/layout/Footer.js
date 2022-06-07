import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="wrapper">
                <div className="icons">
                    <div className="icon-wrapper">
                        <FaFacebookF className="icon" />
                    </div>
                    <div className="icon-wrapper">
                        <FaTwitter className="icon" />
                    </div>
                    <div className="icon-wrapper">
                        <FaInstagram className="icon" />
                    </div>
                </div>
                <small className='copy'>&copy; Copyright Ping. All rights reserved</small>
            </div>
        </footer >
    )
}

export default Footer