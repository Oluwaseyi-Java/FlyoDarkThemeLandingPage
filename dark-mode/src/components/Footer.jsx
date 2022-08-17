import React, { useState } from 'react'
import Logo from "../images/logo.svg"
import { APIData } from "../APIDATA"
import { CgFacebook, CgTwitter, CgInstagram } from "react-icons/cg"


const Footer = () => {

  const [mail, setMail] = useState("")

  return (
    <footer>
      <div className='top'>
        <h4>Get early access today</h4>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.</p>
        <form>
          <input
            value={mail}
            name="email"
            onChange={e => setMail(e.target.value)}
            placeholder="Enter your E-mail"
            type="e-mail"
          />
          <button>Get Started For Free</button>
        </form>
      </div>
      <div>
        <div className='first'>
          <img src={Logo} alt='logo' />
          <div className='items'>
            {APIData.info.map((item, index) => {
              return (<div className='item' key={index}>
                <img src={require("../images/" + item.icon + ".svg")} alt={item.icon}
                />
                <p>{item.content}</p>
              </div>
              )
            })}
          </div>
        </div>
        <div  className='second'>
          {APIData.bNav[0].map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })}
        </div>
        <div  className='third'>
          {APIData.bNav[1].map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })}
        </div>

        <div className='fas'>
          <CgFacebook   className='fa' />
          <CgTwitter  className='fa' />
          <CgInstagram  className='fa'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer