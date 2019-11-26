import React, { useState, useEffect } from "react";
import { timersFetchData, timerLast } from "../actions/timers";
import { useDispatch, useSelector } from "react-redux";
import {CreateTimer} from './CreateTimer';
const Timer = props => {
  const timers = useSelector(state => state.timers);
  
  useEffect(() => {
    dispatch(timersFetchData("http://localhost:3000/timers"));
    dispatch(timerLast());
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <CreateTimer/>

      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>START AT</td>
            <td>END AT</td>
            <td>TICK</td>
            <td>STATUS</td>
          </tr>
        </thead>
        <tbody>
          {timers.map((timer, index) => {
            return (
              <tr key={index}>
                <td>{timer.id}</td>
                <td>
                  {new Date(timer.start_at).toLocaleDateString() +
                    " " +
                    new Date(timer.start_at).toLocaleTimeString()}
                </td>
                <td>
                  {timer.end_at ?   new Date(timer.end_at).toLocaleDateString() +
                    new Date(timer.end_at).toLocaleTimeString(): ''}
                </td>
                <td>{timer.tick}</td>
                <td className={timer.active ? "active" : ""}>
                  {timer.active ? 'active' : 'inactive'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Timer;
