import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import history from './history'

export default (initialState = {}) => {
  const enhancers = [applyMiddleware(routerMiddleware(history))]

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(
    connectRouter(history)(reducers),
    initialState,
    compose(...enhancers)
  )
}
