/* global fetch */
import { api } from './api-lib/api';
export const API_REQUEST='API_REQUEST';
export const THREAD_LIST_REQUEST_SUCCESS='THREAD_LIST_REQUEST_SUCCESS';
export const THREAD_LIST_REQUEST_FAILURE='THREAD_LIST_REQUEST_FAILURE';
export const CREATE_THREAD_REQUEST_SUCCESS='CREATE_THREAD_REQUEST_SUCCESS';
export const CREATE_THREAD_REQUEST_FAILURE='CREATE_THREAD_REQUEST_FAILURE';
export const THREAD_FILTER_UPDATE='THREAD_FILTER_UPDATE';

const apiRequest = () =>({
  type: API_REQUEST,
});

const threadListRequestSuccess = resp =>({
  type: THREAD_LIST_REQUEST_SUCCESS,
  resp
});


const threadListRequestFailure = error =>({
  type: THREAD_LIST_REQUEST_FAILURE,
  error
});

const createThreadRequestSuccess = resp =>({
  type: CREATE_THREAD_REQUEST_SUCCESS,
  resp,
});

const createThreadRequestFailure = resp =>({
  type: CREATE_THREAD_REQUEST_FAILURE,
  resp,
})


export const getThreads = () => (dispatch) => {
  dispatch(apiRequest());
  return api.get('/thread/list')
  .then(resp => {
    if(!resp.success) return dispatch(threadListRequestFailure(resp.message));
    return Promise.resolve(dispatch(threadListRequestSuccess(resp)))})
  .catch(error => Promise.reject(dispatch(threadListRequestFailure((error)))));
};

export const createThreads = (body) => (dispatch) => {
  dispatch(apiRequest());
  return api.post('/thread/create', {...body})
  .then(resp => {
    if(!resp.success) return dispatch(createThreadRequestFailure(resp.message));
    return Promise.resolve(dispatch(createThreadRequestSuccess(resp)))})
  .catch(error => Promise.reject(dispatch(createThreadRequestFailure((error)))));
};

export const updateThreadSearch = (newArray) => {
  debugger
  return {
    type: THREAD_FILTER_UPDATE,
    newArray,
  }
}


