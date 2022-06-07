import React from 'react'

const Main = ({ handleSubmit }) => {
    return (
        <main className='main'>
            <h1 className='main-heading'>We are launching <span>soon!</span></h1>
            <h2 className='sec-heading'>Subscribe and get notified</h2>
            <form className='form'>
                <div className="form-control">
                    <input className='email' placeholder='Your email adress...' type="email" id="email" />
                    <small className='error'>Please provide a valid email address</small>
                    <button
                        onClick={handleSubmit}
                        className='submit'
                        type='submit'>Notify Me</button>
                </div>
            </form>
            <img className='illustration' src="images/illustration-dashboard.png" alt="" />
        </main>
    )
}

export default Main