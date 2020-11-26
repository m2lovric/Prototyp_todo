import React from 'react'

const Form = () => {
  return (
    <form className="form">
      <input type="text" name="task" placeholder="Enter a task :" id="" className="form__input" />
      <input type="datetime-local" name="duedate" id="" className="form__input" />
      <button type="submit">+</button>
    </form>
  )
}

export default Form;