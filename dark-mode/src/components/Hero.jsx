import React from 'react'
import HeroImg from "../images/illustration-intro.png"


const Hero = () => {
    return (
        <section className='Hero'>
            <div className='HeroImg' >
                <img src={HeroImg} alt='heroImg' />
                <div className='HeroHeader'>
                <h1>All your files in one secure location, accessible anywhere.</h1>
                </div>
            </div>
            <div className='Intro'>
                <p>Flyo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button>Get Started</button>
            </div>


        </section>
    )
}

export default Hero