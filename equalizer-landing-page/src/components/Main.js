import React from 'react'
import "./styles/Main.css"

const Main = () => {
    return (
        <main>
            <div className='main-container'>
                <div className='main-wrapper'>
                    <img className='main-background' alt='?' src='mobile-main.png' />
                    <img className='main-image' alt='?' src='illustration-app.png' />
                </div>
                <div className='main-card'>
                    <h2 className='sub-header'>Premium EQ</h2>
                    <p className='sub-text'>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
                    <div className='card-price'>
                        <h3 className='price-heading'>$4</h3>
                        <span className='price-month'>/ month</span>
                    </div>
                    <div className='card-buttons'>
                        <button className='button-ios'>
                            <img className='mobile-logos' alt='?' src='icon-apple.svg' />
                            iOS Download
                        </button>
                        <button className='button-android'>
                            <img className='mobile-logos' alt='?' src='icon-android.svg' />
                            Android Download
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main