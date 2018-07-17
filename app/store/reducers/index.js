import { combineReducers } from 'redux'
import groups from './groups'
import messages from './messages'

export default combineReducers({
  groups,
  messages
})
