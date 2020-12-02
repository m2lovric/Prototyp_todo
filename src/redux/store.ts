import { createStore as reduxCreateStore } from "redux"

const createStore = (reducer: any, state: []) => reduxCreateStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default createStore