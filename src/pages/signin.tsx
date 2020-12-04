import React from 'react'
import Layout from '../components/Layout';

const SignIn = () => {
  return (
    <Layout>
      <section className="sign">
        <article>
          <p>Sign In</p>
        </article>
        <form action="" className="sign__form">
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
          <button type="submit" className="sign__btn red">Sign In</button>
        </form>
      </section>
    </Layout>
  )
}

export default SignIn;