export const SUCCESS_ALERT='SUCCESS_ALERT';
export const FAILURE_ALERT='FAILURE_ALERT';
export const CLEAR_BOTH_ALERT='CLEAR_BOTH_ALERT';

const successAlert = (message) => {
  return {
    type: SUCCESS_ALERT,
    message,
  }
}

const failureAlert = (error) => {
  return {
    type: FAILURE_ALERT,
    error,
  }
}

export const successAlertHandler = message => (dispatch) => {
  setTimeout(() => dispatch(clearBothAlertHandler()),3000);
   dispatch(successAlert(message));
};

export const failureAlertHandler = error => (dispatch) => {
  setTimeout(() => dispatch(clearBothAlertHandler()),3000);
  dispatch(failureAlert(error));
}

export const clearBothAlertHandler = () => {
  return {
    type: CLEAR_BOTH_ALERT
  }
}
