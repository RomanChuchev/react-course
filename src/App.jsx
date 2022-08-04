import React, { Component } from "react";
import './App.css';
import AppPost from "./components/postsApp";
import Timer from "./timer";

export default class App extends Component {
  render() {
    return <div>
      <Timer />

      <AppPost />
    </div>
      
  }
}