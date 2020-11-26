import React from 'react'
import Task from './Task'

const List = () => {
  return (
    <section className="list">
      <Task task="task" dueDate="20.08.2020" />
    </section>
  )
}

export default List;