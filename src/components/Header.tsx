import { Link } from 'gatsby'
import React, { useState } from 'react'

import { LogIn, SignUp } from './index'

const Header = () => {
  return (
    <header>
      <section className="header container--xl">
        <Link to="/" className="header__logo">TaskManager</Link>
        <div className="header__sign">
          <Link to="/signin" className="link">Sign In</Link>
          <Link to="/signup" className="link">Sign Up</Link>
        </div>
      </section>
    </header>
  )
}

export default Header