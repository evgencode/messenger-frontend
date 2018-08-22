import { routerMiddleware } from 'connected-react-router'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'

export const createMiddlewares = history => {
  return [reduxThunk, reduxPromise, routerMiddleware(history)]
}
