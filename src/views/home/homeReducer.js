import { handleActions } from 'redux-actions'

const initState = {
  c: '仓库'
}

const actions = handleActions({
  'NUM': {
    next(state, action) {
      return {
        ...state,
        c: action.payload
      }
    },
    throw(state) {
      return state
    }
  }
}, initState)

export default actions
