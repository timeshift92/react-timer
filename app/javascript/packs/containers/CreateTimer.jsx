import React, { useState,useEffect } from "react";
import { timerCreate} from "../actions/timers";
import { timerTickLast} from "../actions/timer_ticks";
import { useDispatch,useSelector } from "react-redux";
import TimerTick from './Timer';

export const CreateTimer = () => {
  const [tick, setTick] = useState(0);
  const [starTimer, setStarTimer] = useState(false);
  const timer = useSelector(state => state.timer);
  useEffect(() => {
    if(timer && timer.id && !starTimer){
      dispatch(timerTickLast(timer.id))
      setStarTimer(true)
    }
    
  },[timer,tick]);
  
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(timerCreate(tick));
    setTick(0);
      setStarTimer(true);  
    
  };
  return (
    <div>
      place inter timer tick for create timer (in seconds) <br />
      <br />
      <input type="text" value={tick} onChange={e => setTick(e.target.value)} />
      <br />
      <br />
      {tick > 0 && <button onClick={handleClick}> create timer </button>}
      {starTimer && timer && <TimerTick timer={timer} />}
    </div>
  );
};

