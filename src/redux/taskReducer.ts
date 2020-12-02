export const taskReducer = (state: [], action: any) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'REMOVE':
      return state = action.data
    default:
      return state
  }
}