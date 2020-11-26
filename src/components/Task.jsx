import React from 'react'

const Task = ({ task, dueDate }) => {
  return (
    <article className="list__task">
      <p className="list__task__task">{task}</p>
      <p className="list__task__dueDate">{dueDate}</p>
    </article>
  )
}

export default Task;