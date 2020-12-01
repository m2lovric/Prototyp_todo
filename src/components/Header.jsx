import { Link } from 'gatsby'
import React, { useState } from 'react'

import LogIn from './LogIn'
import SignUp from './SignUp'

const Header = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleCloseLog = () => setShowLogIn(false);
  const handleShowLog = () => setShowLogIn(true);
  const handleCloseSign = () => setShowSignIn(false);
  const handleShowSign = () => setShowSignIn(true);

  return (
    <header>
      <section className="header container--xl">
        <Link to="/" className="header__logo">TaskManager</Link>
        <div className="header__sign">
          <button className="link" onClick={handleShowLog}>LOGIN</button>
          <button className="link" onClick={handleShowSign}>SIGNUP</button>
        </div>
      </section>

      <LogIn show={showLogIn} handleClose={handleCloseLog} />
      <SignUp show={showSignIn} handleClose={handleCloseSign} />
    </header>
  )
}

export default Header