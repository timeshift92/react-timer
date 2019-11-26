import { TIMER_TICK } from '../constants/ActionTypes';


export default function timer_tick(state = [], action) {
  switch (action.type) {
    case TIMER_TICK:
      return action.timer_tick
    default:
      return state;
  }
}