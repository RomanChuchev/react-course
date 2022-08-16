import React, { Component } from "react";
import "./App.css";
import TimerReducer from "./components/timerUsingReducer";
export default class App extends Component {
  render() {
    return (
      <div>
        <TimerReducer />
      </div>
    );
  }
}
