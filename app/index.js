console.log('ENTRY')
import React, { Component } from 'react'
import _ from 'lodash'
import test from './components/test'
import './index.css'
test()
console.log('BBB_511', React)

const greveal = { a: 1002 }
const state = { b: 8526, ...greveal }

const Simple = props => <div>{props.name}</div>

class Comp extends Component {
  render() {
    return (
      <div>
        <Simple hasCar {...this.props} />
        <p>{this.children}</p>
      </div>
    )
  }
}

const App = props => <Comp name="Hello">Other Text</Comp>
