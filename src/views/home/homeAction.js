import { createAction } from 'redux-actions'

const HomeActive = {
  c: createAction('NUM', text => text)
}

export default {
  onsetC(text) {
    return dispatch => {
      dispatch(HomeActive.c(text))
    }
  }
}
