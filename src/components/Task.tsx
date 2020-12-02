import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTaskAction } from '../redux/actions'

const Task = () => {
  const tasks = useSelector(state => state);
  console.log(tasks)
  const dispacth = useDispatch();
  tasks.map((el: object) => console.log(el.id))

  const removeTask = (e: any) => {
    const id = e.target.parentNode.getAttribute('data-key');
    const modState = tasks.filter((task: object) => {
      return id !== task.id
    });
    dispacth(removeTaskAction(modState))
  }

  return (
    <section>
      {
        tasks.map((el) => {
          return (
            <article className="list__task" key={el.id} data-key={el.id}>
              <p className="list__task__task">{el.task}</p>
              <p className="list__task__dueDate">{el.dueDate}</p>
              <button className={el.done ? 'green list__task__done' : 'red list__task__done'}>{el.done}</button>
              <button className="list__task__remove" onClick={removeTask}>Remove</button>
            </article>
          )
        })
      }
    </section>
  )
}

export default Task;