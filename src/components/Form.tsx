import React from 'react'
import { useDispatch } from 'react-redux'
import { newTask } from '../redux/actions'

const Form = () => {
  const dispacth = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    const dueDate = e.target.duedate.value;
    e.target.task.value = '';
    e.target.duedate.value = '';
    dispacth(newTask(task, dueDate))
  }
  return (
    <form className="form" onSubmit={addTask}>
      <input type="text" name="task" placeholder="Enter a task :" id="" className="form__input" />
      <input type="datetime-local" name="duedate" id="" className="form__input" />
      <button type="submit">+</button>
    </form>
  )
}

export default Form;