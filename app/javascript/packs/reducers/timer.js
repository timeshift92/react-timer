import * as types from '../constants/ActionTypes';


export default function timers(state = [], action) {
  switch (action.type) {
    case types.TIMERS_FETCH_DATA_SUCCESS:
      return action.timers;
    default:
      return state;
  }
}

export function timer(state = {}, action) {
  switch (action.type) {
    case types.TIMER_FETCH_DATA_SUCCESS:
      return action.timer;
    default:
      return state;
  }
}
