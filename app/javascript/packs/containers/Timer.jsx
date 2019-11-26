import React, { useState, useEffect } from "react";
import { timerUpdate } from "../actions/timers";
import { useDispatch, useSelector } from "react-redux";
import { timerTickCreate } from "../actions/timer_ticks";

const TimerTick = (prop) => {

  const timer = useSelector(state => state.timer);
  const timer_tick = useSelector(state => state.timer_tick);
  const [tick, setTick] = useState(0);
  
  const tickTimer = timerID => {
    setTick(tick + 1);
    dispatch(timerTickCreate(timer.id, tick));
    if (tick + 1 === timer.tick) {
      dispatch(timerUpdate(timer.id));
    }
  };

  const getDate = date => {
    return (
      new Date(date).toDateString() + " " + new Date(date).toLocaleTimeString()
    );
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(prop)
    if (timer_tick && timer_tick.tick && tick == 0) {
      setTick(timer_tick.tick);
    }
    if (tick !== timer.tick && timer_tick) {
      var timerID = setInterval(() => tickTimer(timerID), 1000);
    } 

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [timer, tick,timer_tick]);
  if(timer == null)
  return ''
  return (
    <div>
      start_at {getDate(timer.start_at)}
      {"  " + getDate(new Date(timer.start_at).getTime() + tick * 1000) + "  "}
      end_at {getDate(new Date(timer.start_at).getTime() + timer.tick * 1000)}
    </div>
  );
};

export default TimerTick;
