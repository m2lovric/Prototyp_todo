import React from 'react'
import { useSelector } from 'react-redux'

const Task = () => {
  const tasks = useSelector(state => state);
  console.log(tasks)
  return (
    <section>
      {
        tasks.map((el) => {
          return (
            <article className="list__task" key={el.id}>
              <p className="list__task__task">{el.task}</p>
              <p className="list__task__dueDate">{el.dueDate}</p>
              <button className={el.done ? 'green list__task__done' : 'red list__task__done'}>{el.done}</button>
              <button className="list__task__remove">Remove</button>
            </article>
          )
        })
      }
    </section>
  )
}

export default Task;