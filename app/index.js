import React, { Component } from 'react'
import { render } from 'react-dom'
import Root from '@components/main/Root'

// render(<Root />, document.getElementById('root'))

const sortNames = names => {
  console.log('SORTED')
  return names.sort()
}

class Names extends Component {
  state = {
    names: [],
    sortedNames: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.names !== prevState.names) {
      return {
        names: nextProps.names,
        sortedNames: sortNames(nextProps.names)
      }
    }
    return null
  }

  render() {
    const { color } = this.props
    const { sortedNames } = this.state
    return (
      <ul>
        {sortedNames.map(name => {
          return (
            <li
              key={name}
              style={{
                border: `2px solid ${color}`,
                padding: '5px',
                listStyle: 'none',
                margin: '5px'
              }}
            >
              {name}
            </li>
          )
        })}
      </ul>
    )
  }
}

class Provider extends Component {
  state = {
    color: this.getColor(),
    names: this.getNames()
  }

  getColor() {
    const randIndex = Math.ceil(Math.random() * 5) - 1
    return ['red', 'green', 'blue', 'grey', 'brown'][randIndex]
  }

  getNames() {
    const randIndex = Math.ceil(Math.random() * 2) - 1
    return [
      ['RFO', 'BNO', 'BAO', 'MDV', 'AFO', 'DOP'],
      ['NOLO', 'BOPY', 'ARON', 'SEPO', 'CEED', 'NOFY', 'KAMS']
    ][randIndex]
  }

  changeColor = () => {
    this.setState({
      color: this.getColor()
    })
  }

  changeNames = () => {
    this.setState({
      names: this.getNames()
    })
  }

  render() {
    const { names, color } = this.state
    return (
      <div style={{ width: '300px' }}>
        <button onClick={this.changeColor}>Change color</button>
        <button onClick={this.changeNames}>Change names</button>
        <Names {...{ names, color }} />
      </div>
    )
  }
}

render(<Provider />, document.getElementById('root'))
