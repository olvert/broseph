import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import * as actionCreators from './actionCreators'

export class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-content">
          {this.props.count}
        </p>
        <button onClick={this.props.increment}>
          Increment
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.get('count')
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App)

