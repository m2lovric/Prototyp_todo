import { v4 } from 'uuid';

export const newTask = (task: string, dueDate: Date) => {
  const id = () => {
    const taskId = v4();
    return taskId;
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

export const removeTaskAction = (state: any) => {
  return {
    type: 'REMOVE',
    data: state
  }
}