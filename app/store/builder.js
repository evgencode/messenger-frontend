import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'

export default (initialState = {}) => {
  const enhancers = [applyMiddleware()]

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(reducers, initialState, compose(...enhancers))
}
