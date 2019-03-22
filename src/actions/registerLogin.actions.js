/* global fetch */
/* global localStorage */
import { api } from './api-lib/api';
const API_REQUEST='API_REQUEST';
const REGISTER_REQUEST_SUCCESS='REGISTER_REQUEST_SUCCESS';
const REGISTER_REQUEST_FAILURE='REGISTER_REQUEST_FAILURE';
const LOGIN_REQUEST_SUCCESS='LOGIN_REQUEST_SUCCESS';
const LOGIN_REQUEST_FAILURE='LOGIN_REQUEST_FAILURE';

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


export const login = body => (dispatch) => {
  dispatch(apiRequest());
  return api.post('/signin', {...body})
  .then(resp => {
      if(!resp.success) return dispatch(loginRequestFailure(resp.message));
      localStorage.setItem('token', resp.token);
      localStorage.setItem('username', resp.username);
      return Promise.resolve(dispatch(registerRequestSuccess(resp)));
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