import {
  API_REQUEST,
  THREAD_LIST_REQUEST_SUCCESS,
  THREAD_LIST_REQUEST_FAILURE,
} from '../actions/thread.actions'

const initialState = {
  items: [],
  pending: false,
}
const thread = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case THREAD_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        items: action.resp.threads,
        pending: false,
      }
    case THREAD_LIST_REQUEST_FAILURE:
      return {
        ...state,
        items: action.error.message,
        pending: false,
      }
    default:
      return state;
  }
}
export default thread