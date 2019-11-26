import React, { Component } from 'react';
import {  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, renderDevTools } from '../store_enhancers/devTools';
import {  composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers';
import TimerList from './TimerList';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  );

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <TimerList /> 
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}