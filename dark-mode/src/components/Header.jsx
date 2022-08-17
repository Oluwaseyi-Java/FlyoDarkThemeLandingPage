import React from 'react'
import Logo from "../images/logo.svg"


const Header = () => {
  return (
    <header className='Header'>
      <img src={Logo} alt="logo" />
      <div>
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </div>
    </header>
  )
}

export default Header