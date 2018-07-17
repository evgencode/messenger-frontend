import _ from 'lodash'
import { handleActions } from 'redux-actions'
const defaultState = {
  byId: {}
}

const reducerMap = {
  'MESSAGES/SET_ALL': (state, { payload }) => {
    const byId = _.fromPairs(payload.map(group => [group.id, group]))
    return { ...state, byId }
  }
}

export default handleActions(reducerMap, defaultState)
