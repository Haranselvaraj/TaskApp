import actionTypes from '../actionTypes';

export default {
  setInputDescription: description => ({
    type: actionTypes.SET_INPUT_DESCRIPTION,
    description,
  }),
  setInputDate: date => ({
    type: actionTypes.SET_INPUT_DATE,
    date
  }),
  setInputTime: time => ({
    type: actionTypes.SET_INPUT_TIME,
    time
  }),
  setInputId: id => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}