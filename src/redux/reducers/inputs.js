import actionTypes from '../actionTypes';

const initialState = {
  id: -1,
  description: '',
  date: '',
  time:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_DESCRIPTION: {
      const { description } = action;
      return {
        ...state,
        description,
      }
    }
    case actionTypes.SET_INPUT_DATE: {
      const { date } = action;
      return {
        ...state,
        date,
      }
    }
    case actionTypes.SET_INPUT_TIME: {
        const { time } = action;
        return {
          ...state,
          time,
        }
      }
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
}