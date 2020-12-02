import React from 'react'
import Modal from 'react-modal'

const LogIn = ({ show, handleClose }: any) => {
  return (
    <Modal overlayClassName="modal__popup__overlay" className="modal__popup" isOpen={show}>
      <p>Log In</p>
      <button onClick={handleClose}>Close</button>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" />
        <button type="submit">Log In</button>
      </form>
    </Modal>
  )
}

export default LogIn;