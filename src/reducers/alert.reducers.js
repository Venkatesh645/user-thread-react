import {
  SUCCESS_ALERT,
  FAILURE_ALERT,
  CLEAR_BOTH_ALERT,
} from '../actions/alert.actions'

const initialState = {
  message: undefined,
  error: undefined,
}
const thread = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ALERT:
      return {
        ...state,
        message: action.message,
        error: undefined,
      }
    case FAILURE_ALERT:
      return {
        ...state,
        error: action.error,
        message: undefined,
      }
    case CLEAR_BOTH_ALERT:
      return {
        ...state,
        error: undefined,
        message: undefined,
      }
    default:
      return state;
  }
}
export default thread