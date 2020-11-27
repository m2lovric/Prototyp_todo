import React from "react"
import { Provider } from "react-redux"

import createStore from "./src/redux/store"

import { taskReducer } from './src/redux/taskReducer'
import { loadState, saveState } from './src/localStorage/localStorage'

export default ({ element }) => {
  const persistedState = loadState();
  const store = createStore(taskReducer, persistedState || [])
  store.subscribe(() => {
    saveState(store.getState())
  })
  return <Provider store={store}>{element}</Provider>
}