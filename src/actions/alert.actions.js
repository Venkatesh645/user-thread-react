export const SUCCESS_ALERT='SUCCESS_ALERT';
export const FAILURE_ALERT='FAILURE_ALERT';
export const CLEAR_BOTH_ALERT='CLEAR_BOTH_ALERT';

const successAlert = (message) => {
  debugger
  return {
    type: SUCCESS_ALERT,
    message,
  }
}

const failureAlert = (error) => {
  debugger
  return {
    type: FAILURE_ALERT,
    error,
  }
}

export const successAlertHandler = message => (dispatch) => {
  debugger
  setTimeout(() => dispatch(clearBothAlertHandler()),3000);
   dispatch(successAlert(message));
};

export const failureAlertHandler = error => (dispatch) => {
  debugger
  setTimeout(() => dispatch(clearBothAlertHandler()),3000);
  debugger
  dispatch(failureAlert(error));
}

export const clearBothAlertHandler = () => {
  debugger
  return {
    type: CLEAR_BOTH_ALERT
  }
}
