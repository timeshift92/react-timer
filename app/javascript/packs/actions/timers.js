import { TIMERS_FETCH_DATA_SUCCESS, TIMER_FETCH_DATA_SUCCESS } from '../constants/ActionTypes';
import { api_url } from '../utils/api';

export function timersFetchData() {
  return (dispatch) => {
    fetch(`${api_url}/timers`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(timers => dispatch(timersFetchDataSuccess(timers)))
  }
}

export function timerCreate(tick) {
  return (dispatch) => {
    fetch(`${api_url}/timers`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ tick })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(timer => {
        dispatch(timersFetchData())
        dispatch(timerFetchDataSuccess(timer))
      }
      )
  }
}

export function timerUpdate(id) {
  return (dispatch) => {
    fetch(`${api_url}/timers/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(timer => {
        dispatch(timersFetchData())

      })
  }
}

export function timerLast() {
  return (dispatch) => {
    fetch(`${api_url}/last`, {
      
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(timer => {
        dispatch(timerFetchDataSuccess(timer))

      })
  }
}

export function timerFetchDataSuccess(timer) {
  return {
    type: TIMER_FETCH_DATA_SUCCESS,
    timer
  }
}

export function timersFetchDataSuccess(timers) {
  return {
    type: TIMERS_FETCH_DATA_SUCCESS,
    timers
  }
}