import React from 'react'
import "./styles/Header.css"
// import logo from '../public/equalizer.png'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <a href='s' className='logo-link'>
                    <img className='logo' alt='neviem' src='equalizer.png' />
                </a>
                <img className='header-background' alt='?' src='bg-mobile-new.png' />
                <h1 className='main-heading'>We make your music sound extraordinary.</h1>
                <p className='main-text'>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
            </div>
        </header>
    )
}

export default Header