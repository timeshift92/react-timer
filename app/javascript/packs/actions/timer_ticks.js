import { TIMER_TICK } from '../constants/ActionTypes';
import { api_url } from '../utils/api';


export function timerTickLast(id) {
  return (dispatch) => {
    fetch(`${api_url}/timer_ticks/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(timer_tick => dispatch(timerTickDataSuccess(timer_tick)))
  }
}

export function timerTickCreate(timer_id, tick) {
  return (dispatch) => {
    fetch(`${api_url}/timer_ticks/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ timer_id, tick })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(timer_tick => {
        dispatch(timerTickDataSuccess(timer_tick))
      }
      )
  }
}

export function timerTickDataSuccess(timer_tick) {
  return {
    type: TIMER_TICK,
    timer_tick
  }
}

