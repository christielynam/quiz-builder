import React, { Component } from 'react';
import './App.css';
import { fetchQuiz } from '../../utils';
import AppContainer from '../../containers/App-container';
import Users from '../../containers/Users'

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(this.props)
    fetchQuiz()
    .then(res => console.log(res))
    .then(res => this.props.addQuiz(res))
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Quizzer</h1>
        <Users />
      </div>
    );
  }
}

export default AppContainer(App);
