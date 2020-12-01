import React, { useState } from 'react'
import Modal from 'react-modal'

import { signUp } from '../firebase/auth'


const SignUp = ({ show, handleClose }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const signUpForm = (e) => {
    e.preventDefault();
    signUp(email, password, passwordConfirm);
  }

  return (
    <Modal overlayClassName="modal__popup__overlay" className="modal__popup signup" isOpen={show}>
      <section>
        <p>Sign Up</p>
        <button onClick={handleClose}>Close</button>
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
  )
}

export default SignUp;