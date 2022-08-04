import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    count: 0,
    isCounting: false
  }

  componentDidMount() {
    const userCount = localStorage.getItem('timer')
    if (userCount) {
      this.setState({count: +userCount})
    }
  }

  componentDidUpdate() {
    localStorage.setItem('timer', this.state.count)
  }

  componentWillUnmount() {
    clearInterval(this.counterId)
  }

  start = () => {
    this.setState({isCounting: true})

    this.counterId = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  stop = () => {
    this.setState({isCounting: false})
    clearInterval(this.counterId)
  }

  reset = () => {
    this.setState({isCounting: false, count: 0})
    clearInterval(this.counterId)
  }

  render() {
    return (
      <div>
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.start}>Start</button> 
        ) : (
          <button onClick={this.stop}>Stop</button> 
        )}
          <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}