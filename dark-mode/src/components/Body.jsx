import React from 'react'
import Hero from './Hero'
import Profile from './Profile'
import Services from './Services'
import { FaArrowCircleRight } from "react-icons/fa"
import Illust from "../images/illustration-stay-productive.png"


const Body = () => {


  return (
    <main>
      <Hero />
      <Services />
      <section className='Anony'>
      <img src={Illust} alt='pic' />
        <h4>Stay productive, wherever you are</h4>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
          storage needs.</p>
        <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email
          attachments required.</p>
        <button> See how Fylo works<FaArrowCircleRight /></button>
      </section>
      <Profile />
    </main>
  )
}

export default Body