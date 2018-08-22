import { connectRouter } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { createMiddlewares } from './middlewares'
import reducers from './reducers'
import history from './history'

export default (initialState = {}) => {
  const middlewares = createMiddlewares(history)
  const enhancers = [applyMiddleware(...middlewares)]

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(connectRouter(history)(reducers), initialState, compose(...enhancers))
}
