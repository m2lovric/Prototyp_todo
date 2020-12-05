import React from "react"
import { Provider } from "react-redux"
import { combineReducers } from 'redux'

import createStore from "./src/redux/store"

import { taskReducer } from './src/redux/taskReducer'
import { userReducer} from './src/redux/userReducer'

import { saveState } from './src/localStorage/localStorage'

export default ({ element }) => {

  const allReducers = combineReducers({
    task : taskReducer,
    user : userReducer
  });

  const store = createStore(allReducers)

  store.subscribe(() => {
    saveState(store.getState().task)
  })
  return <Provider store={store}>{element}</Provider>
}