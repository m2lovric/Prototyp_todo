import { Link } from 'gatsby'
import React, { useState } from 'react'
import Modal from 'react-modal'

import { signUp } from '../firebase/auth'

const Header = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleCloseLog = () => setShowLogIn(false);
  const handleShowLog = () => setShowLogIn(true);
  const handleCloseSign = () => setShowSignIn(false);
  const handleShowSign = () => setShowSignIn(true);

  const signUpForm = (e) => {
    e.preventDefault();
    signUp(email, password, passwordConfirm);
  }

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
        <form action="">
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
          <button type="submit">Log In</button>
        </form>
      </Modal>

      <Modal overlayClassName="modal__popup__overlay" className="modal__popup signup" isOpen={showSignIn}>
        <section>
          <p>Sign Up</p>
          <button onClick={handleCloseSign}>Close</button>
        </section>
        <form className="signup__form" onSubmit={signUpForm}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="signup_email" onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="signup_password" onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="password_confirm">Confirm Password</label>
          <input type="password" name="password_confirm" id="signup_password_confirm" onChange={(e) => setPasswordConfirm(e.target.value)} />

          <button className="signup__btn" type="submit">Sign Up</button>
        </form>
      </Modal>
    </header>
  )
}

export default Header