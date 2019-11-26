import {combineReducers} from 'redux';
import timers,{timer}  from './timer';
import timer_tick from './timer_ticks';
const rootReducer = combineReducers({
    timers,
    timer,
    timer_tick
})
export default rootReducer;