import {
  API_REQUEST,
  USERNAME_TO_STORE,
  LOGIN_REQUEST_SUCCESS,
  DELETE_USERNAME
} from '../actions/registerLogin.actions'

const initialState = {
  user: null,
  pending: false,
  loggedInUsername:'',
}
const registerLogin = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        pending: false,
        loggedInUsername: action.resp.username,
      }
    case USERNAME_TO_STORE:
      return {
        ...state,
        loggedInUsername: action.payload,
      }
    case DELETE_USERNAME:
      return {
        ...state,
        loggedInUsername: '',
      }
    default:
    return state;
  }
}
export default registerLogin