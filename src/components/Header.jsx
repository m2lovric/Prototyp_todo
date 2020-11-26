import { Link } from 'gatsby'
import React, { useState } from 'react'
import Modal from 'react-modal'

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

      <Modal overlayClassName="modal__popup__overlay" className="modal__popup" isOpen={showLogIn}>
        <p>Log In</p>
        <button onClick={handleCloseLog}>Close</button>
      </Modal>

      <Modal overlayClassName="modal__popup__overlay" className="modal__popup" isOpen={showSignIn}>
        <p>Sign In</p>
        <button onClick={handleCloseSign}>Close</button>
      </Modal>
    </header>
  )
}

export default Header