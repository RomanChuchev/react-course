import React, { Component } from "react";
import {Posts} from './posts'

export default class AppPost extends Component {
  state = {
    posts: [
      {id: 'abc1', name: 'Make Avesom App'},
      {id: 'abc2', name: 'Drink water'},
      {id: 'abc3', name: 'Have a lunch'},
      {id: 'abc4', name: 'Learn React'}
    ]
  }

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('post'))
    if (userData) {
      this.setState({posts: userData})
    }
  }

  componentDidUpdate() {
    localStorage.setItem('post', JSON.stringify(this.state.posts))
  }

  delete = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }

  render() {
    return <div>
      <h2>Работа с коллекциями и атрибутом key</h2>
      
      <Posts posts={this.state.posts} cb={this.delete} />
      </div>
      
  }
}
