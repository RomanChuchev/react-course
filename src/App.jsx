import React, { Component } from "react";
import './App.css';
import AppPost from "./components/postsApp";
import Timer from "./timer";
import SubscriptionForm from "./components/form"

export default class App extends Component {
  render() {
    return <div>
      <SubscriptionForm />
    </div>
      
  }
}