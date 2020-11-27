import { v4 } from 'uuid';

export const newTask = (task, dueDate) => {
  const id = () => {
    const id = v4();
    console.log(id)
    return id;
  }

  return {
      type: 'ADD',
      data: {
        id: id(),
        task,
        dueDate,
        done: false
      }
    }
}