import React, { useState } from 'react'

import { signUp } from '../firebase/auth'


const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const signUpForm = (e: any) => {
    e.preventDefault();
    signUp(email, password, passwordConfirm);
  }

  return (
    <section className="signup">
      <section>
        <p>Sign Up</p>
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
    </section>
  )
}

export default SignUp;