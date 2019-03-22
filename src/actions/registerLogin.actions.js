/* global fetch */
/* global localStorage */
import { api } from './api-lib/api';
export const API_REQUEST='API_REQUEST';
export const REGISTER_REQUEST_SUCCESS='REGISTER_REQUEST_SUCCESS';
export const REGISTER_REQUEST_FAILURE='REGISTER_REQUEST_FAILURE';
export const LOGIN_REQUEST_SUCCESS='LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE='LOGIN_REQUEST_FAILURE';
export const USERNAME_TO_STORE= 'USERNAME_TO_STORE';
export const DELETE_USERNAME='DELETE_USERNAME';

const apiRequest = () =>({
  type: API_REQUEST,
})

const loginRequestSuccess = resp => (
{
  type: LOGIN_REQUEST_SUCCESS,
  resp
});

const loginRequestFailure = error => (
{
  type: LOGIN_REQUEST_FAILURE,
  error
});

const registerRequestSuccess = resp => (
{
  type: REGISTER_REQUEST_SUCCESS,
  resp
});

const registerRequestFailure = error => (
{
  type: REGISTER_REQUEST_FAILURE,
  error
});

export const usernameToStore = () => {
  debugger
  return {
    type: USERNAME_TO_STORE,
    payload: localStorage.getItem('username') }
}

export const removeUserNameFromStore = () => {
  return{
    type: DELETE_USERNAME,
  }
}


export const login = body => (dispatch) => {
  dispatch(apiRequest());
  return api.post('/signin', {...body})
  .then(resp => {
      if(!resp.success) return dispatch(loginRequestFailure(resp.message));
      localStorage.setItem('token', resp.token);
      localStorage.setItem('username', resp.username);
      return Promise.resolve(dispatch(loginRequestSuccess(resp)));
    })
  .catch(error => {
      return Promise.reject(dispatch(registerRequestFailure(error)));
    })
};

export const register = body => (dispatch) => {
  dispatch(apiRequest());
  return api.post('/register', {...body})
  .then(resp => {
    if(!resp.success) return dispatch(registerRequestFailure(resp.message));
      return Promise.resolve(dispatch(registerRequestSuccess(resp)));
    })
  .catch(error => {
      return Promise.reject(dispatch(registerRequestFailure(error)));
    })
};